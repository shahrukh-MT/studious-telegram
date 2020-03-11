import React from "react";

const Level2BuildingsStack = () => (
  <>
    <div className="building l2" style={{ height: "50vh" }} />
    <div className="building l2" style={{ height: "34vh" }} />
    <div className="building l2" style={{ height: "47vh" }} />
    <div className="building l2" style={{ height: "30vh" }} />
    <div className="building l2" style={{ height: "55vh" }} />
    <div className="building l2" style={{ height: "44vh" }} />
    <div className="building l2" style={{ height: "52vh" }} />
    <div className="building l2" style={{ height: "64vh" }} />
    <div className="building l2" style={{ height: "40vh" }} />
    <div className="building l2" style={{ height: "34vh" }} />
  </>
);

const Level2Buildings = ({ scrollPosition = 0 }) => (
  <div className="bldg-wrp layer-2" style={{ left: `${Math.floor(scrollPosition / 5)}px` }}>
    <Level2BuildingsStack />
    <Level2BuildingsStack />
    <Level2BuildingsStack />
  </div>
);
export default Level2Buildings;
