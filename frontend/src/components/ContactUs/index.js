import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { axios } from "../../axios";
import { FiSend } from "react-icons/fi";

import schema from "./dataSchema";

import "./ContactUs.scss";

function ContactUs() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    const response = await axios("/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { ...data },
    });

    if (response.data === "Gracias por contactarnos") {
      toast.success(response.data);
      navigate("/");
    } else {
      toast.error(response.data);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="contact__background">
        <div className="contact__form-container">
          <h4 className="contact__form-title">Contáctanos</h4>

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="contact__form-input">
              <input type="text" required {...register("name")} />
              <label>Nombre</label>
            </div>
            <p>{errors.name?.message}</p>

            <div className="contact__form-input">
              <input type="text" required {...register("phone")} />
              <label>Número de teléfono</label>
            </div>
            <p>{errors.phone?.message}</p>

            <div className="contact__form-input">
              <input type="email" required {...register("email")} />
              <label>Email</label>
            </div>
            <p>{errors.email?.message}</p>

            <div className="contact__form-input">
              <input type="text" required {...register("message")} />
              <label>Mensaje</label>
            </div>
            <p>{errors.message?.message}</p>

            <div className="contact__form-actions">
              <button className="contact__form-btn">
                Enviar <FiSend className="contact__form-btn-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
