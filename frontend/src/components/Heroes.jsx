import React from "react";
import HeroeSection from "./HeroeSection";
import ExcelGrid from "./ExcelGrid";
import WaveBackground from "./WaveBackground";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stats from "./Stats";
import ExcelFuture from "./ExcelFuture";


const Heroes = () => {
  return (
    <>
      <main className="main-container">
        <div style={{ backgroundColor: "white", overflow: "hidden" }}>
          <div style={{ position: "relative", minHeight: "100vh" }}>
            <canvas
              className="canvas-layer layer1"
              width="3040"
              height="1956"
            ></canvas>

            <canvas
              className="canvas-layer layer2"
              width="719"
              height="1056"
            ></canvas>

            <div className="gradient-background"></div>
            <HeroeSection />
            <ExcelGrid/>
            <WaveBackground/>
          </div>
          <Stats/>
          <ExcelFuture/>
        </div>
      </main>
    </>
  );
};

export default Heroes;
