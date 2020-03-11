import React from "react";
import GrassOnLand from "src/img/bg_with_Land.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${GrassOnLand})`,
        backgroundRepeat: "repeat-x",
        width: "100%",
        bottom: 0,
        height: "170px",
        position: "absolute"
      }}
    ></div>
  );
};

export default Footer;
