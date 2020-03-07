import React from "react";

import imageToDisplay from "src/img/bg.svg";

import { StyledFooterWrp } from "./style";

const Footer = () => {
  return (
    <StyledFooterWrp>
      <img src={imageToDisplay} alt="" className=""></img>
      <img src={imageToDisplay} alt="" className="flip"></img>
    </StyledFooterWrp>
  );
};

export default Footer;
