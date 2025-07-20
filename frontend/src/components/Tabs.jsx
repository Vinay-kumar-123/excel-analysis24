
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LineChart from "../Chart/LineChart"; 
import BarChart from "../Chart/BarChart";
import PieChart from "../Chart/PieChart";
import ScatterChart from "../Chart/ScatterChart";
import AreaChart from "../Chart/AreaChart";
import BubbleChart from "../Chart/BubbleChart";
import ThreeDBarChart from "../Chart3d/ThreeDBarChart";
import ThreeDSurfaceChart from "../Chart3d/ThreeDSurfaceChart";
import Pie3DChart from "../Chart3d/Pie3DChart";
import ThreeDScatterChart from "../Chart3d/ThreeDScatterChart";
import ThreeDBubbleChart from "../Chart3d/ThreeDBubbleChart";
import Area3DChart from "../Chart3d/Area3DChart";
import PowerMap from "../Chart3d/PowerMap";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("2d");

  const location = useLocation();
  const data = location.state?.data;

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <button
          className={activeTab === "2d" ? "tab active" : "tab"}
          onClick={() => setActiveTab("2d")}
        >
          📊 2D Charts
        </button>
        <button
          className={activeTab === "3d" ? "tab active" : "tab"}
          onClick={() => setActiveTab("3d")}
        >
          🏔️ 3D Visualizations
        </button>
        <button
          className={activeTab === "map" ? "tab active" : "tab"}
          onClick={() => setActiveTab("map")}
        >
          🌍 Power Map
        </button>

         <Link to='/ai' state={{ data }}>
        <button className="excel-continue-button mx-2">🤖Get AI Insights</button>
        </Link>
      </div>

      <div className="tab-content">
        {activeTab === "2d" && (
          <div>
            {data && data.length > 1 ? (
              <>
                <p>📊 Showing 2D Charts</p>
                <div className="chart-grid">
                  <LineChart data={data} />
                  <BarChart data={data} />
                </div>
                <div className="chart-grid">
                  <PieChart data={data} />
                  <ScatterChart data={data} />
                </div>
                <div className="chart-grid">
                  <AreaChart data={data} />
                  <BubbleChart data={data} />
                </div>
               
              </>
            ) : (
              <p className="text-red-500 mt-4">📛 No data available for chart</p>
            )}
          </div>
        )}

         {activeTab === "3d" && (
          <div>
            {data && data.length > 1 ? (
              <>
                <p>🏔️ Showing 3D Charts</p>
                <div className="chart-grid">
                  <ThreeDBarChart data={data} />
                  <ThreeDSurfaceChart data={data} />
                </div>
               <div className="chart-grid">
                  <Pie3DChart data={data} />
                  <ThreeDScatterChart data={data} />
                </div>
                <div className="chart-grid">
                  <ThreeDBubbleChart data={data} />
                   <Area3DChart data={data} />
                  
                </div>
              </>
            ) : (
              <p className="text-red-500 mt-4">📛 No data available for 3D charts</p>
            )}
          </div>
        )}
        {activeTab === "map" && (
  <div>
    {data && data.length > 1 ? (
      <>
        <p>🌍 Showing Power Map</p>
        <div className="chart-grid">
          <PowerMap data={data} />
        </div>
      </>
    ) : (
      <p className="text-red-500 mt-4">📛 No data available for Power Map</p>
    )}
  </div>
)}
      </div>
    </div>
  );
};

export default Tabs;
