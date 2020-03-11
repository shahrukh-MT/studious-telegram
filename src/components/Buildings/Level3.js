import React from "react";

const Level3Buildings = () => (
  <>
    <div className="building l3" style={{ height: "30vh" }} />
    <div className="building l3" style={{ height: "52vh" }} />
    <div className="building l3" style={{ height: "26vh" }} />
    <div className="building l3" style={{ height: "42vh" }} />
    <div className="building l3" style={{ height: "32vh" }} />
    <div className="building l3" style={{ height: "25vh" }} />
    <div className="building l3" style={{ height: "55vh" }} />
    <div className="building l3" style={{ height: "25vh" }} />
    <div className="building l3" style={{ height: "30vh" }} />
    <div className="building l3" style={{ height: "62vh" }} />
    <div className="building l3" style={{ height: "40vh" }} />
    <div className="building l3" style={{ height: "50vh" }} />
    <div className="building l3" style={{ height: "25vh" }} />
    <div className="building l3" style={{ height: "35vh" }} />
  </>
);

const Level2Buildings = ({ scrollPosition = 0 }) => {
  return (
    <div className="bldg-wrp layer-3" style={{ left: `${Math.floor(scrollPosition / 2)}px` }}>
      <Level3Buildings />
      <Level3Buildings />
      <Level3Buildings />
    </div>
  );
};

export default Level2Buildings;
