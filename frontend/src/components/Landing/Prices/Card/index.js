import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Card.scss";

function Prices({ title, price, icon }) {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    } else {
      animation.start({ scale: 0.5, opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <motion.div className="price-card" ref={ref} animate={animation}>
      <div className="price-card__icon-container">{icon}</div>

      <h4 className="price-card__title">{title}</h4>

      <div className="price-card__info">
        <p>Acá entran los</p>
        <p>Servicios incluídos</p>
        <p>En este arancel</p>
      </div>

      <div className="price-card__price">
        <span>$</span>
        {price}
      </div>
    </motion.div>
  );
}

export default Prices;
