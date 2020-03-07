import React from "react";
import PropTypes from "prop-types";
import background_cloud from "src/img/LongClouds.svg";

import { StyledHeaderWrp } from "./style";

const Header = ({ scrollPosition }) => {
  return (
    <StyledHeaderWrp left={`-${scrollPosition / 4}px`}>
      <img src={background_cloud} alt="" className="clouds"></img>
    </StyledHeaderWrp>
  );
};

Header.defaultProps = {
  scrollPosition: 0
};

Header.propTypes = {
  scrollPosition: PropTypes.number.isRequired
};

export default Header;
