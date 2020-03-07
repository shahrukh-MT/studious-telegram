import React, { useState } from "react";
import "./App.css";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollListener = event => {
    console.log("scrollTop", event.target.scrollTop);

    setScrollPosition(event.target.scrollTop);
  };

  return (
    <div className="App" onScroll={scrollListener}>
      <Header scrollPosition={scrollPosition} />
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
