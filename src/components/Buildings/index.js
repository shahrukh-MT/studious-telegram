import React from "react";

import Level2 from "./Level2";
import Level1 from "./Level1";
import Level3 from "./Level3";

const Buildings = ({ ...props }) => {
  return (
    <>
      <Level3 {...props} />
      <Level2 {...props} />
      <Level1 {...props} />
    </>
  );
};

export default Buildings;
