import React, { useEffect } from "react";
import background_cloud from "./img/LongClouds.svg";

const Header = () => {
  const scrollListener = event => {
    console.log(event);
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);
  };

  useEffect(() => {
    console.log("sss");
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div className="header">
      <img src={background_cloud} alt=""></img>
    </div>
  );
};

export default Header;
