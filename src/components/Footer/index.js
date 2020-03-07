import React from "react";

import imageToDisplay from "src/img/bg.svg";
import land from "src/img/land.svg";

import { StyledFooterWrp } from "./style";

const Footer = () => {
  return (
    <StyledFooterWrp>
      <img src={imageToDisplay} alt="" className="grass"></img>
      <img src={imageToDisplay} alt="" className="grass flip"></img>
      <img src={land} alt="" className="land"></img>
    </StyledFooterWrp>
  );
};

export default Footer;
