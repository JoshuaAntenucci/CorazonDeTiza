import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Card.scss";

function Card({ title, text, img, leftImg = false }) {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.1,
        },
      });
    } else {
      animation.start({ x: `${leftImg ? "-100vw" : "100vw"}`, opacity: 0 });
    }
  }, [inView, animation, leftImg]);

  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={ref}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <motion.div
          className="landing-card"
          // initial={{ x: `${leftImg ? "-100vw" : "100vw"}` }}
          animate={animation}
          // transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <div
            className={`landing-card__info${
              !leftImg ? " landing-card__info--left" : ""
            }`}
          >
            <h3>{title}</h3>
            {text}
          </div>

          <div
            className={`landing-card__image${
              leftImg ? " landing-card__image--left" : ""
            }`}
          >
            <img src={img} alt={title} />
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}

export default Card;
