import React from "react";

import "./Title.scss";

function Title({ title }) {
  return (
    <div className="landing-title__container">
      <h4 className="landing-title__title">{title}</h4>
    </div>
  );
}

export default Title;
