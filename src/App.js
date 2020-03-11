import React, { useState } from "react";
import "./App.css";

import Footer from "src/components/Footer";
import Buildings from "./components/Buildings";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollListener = event => {
    console.log("scrollTop", event.target.scrollTop);

    setScrollPosition(event.target.scrollTop);
  };

  return (
    <div className="App" onScroll={scrollListener}>
      <div className="outer-wrapper">
        <div className="wrapper">
          <Buildings style={{ position: "absolute", bottom: 0 }} scrollPosition={scrollPosition} />
          <div className="slide">
            <h1>The work is in progess. Pls come back soon again</h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
