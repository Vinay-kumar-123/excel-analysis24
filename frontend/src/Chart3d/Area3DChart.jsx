// Area3DChart.jsx

import React, { useState } from "react";
import Plot from "react-plotly.js";
import download from "downloadjs";

const Area3DChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);
  const [zIndex, setZIndex] = useState(2);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const x = data.slice(1).map((row) => row[xIndex]);
  const y = data.slice(1).map((row) => row[yIndex]);
  const z = data.slice(1).map((row) => row[zIndex]);

  const handleDownload = () => {
    const header = [data[0][xIndex], data[0][yIndex], data[0][zIndex]];
    const rows = data.slice(1).map((row) => [row[xIndex], row[yIndex], row[zIndex]]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    download(csvContent, "area3d_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="chart-title">⛰️ 3D Area Chart (as Surface)</h3>

      <div className="chart-filters">
        <label>
          X-axis:
          <select value={xIndex} onChange={(e) => setXIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>{col || `Column ${i + 1}`}</option>
            ))}
          </select>
        </label>
        <label>
          Y-axis:
          <select value={yIndex} onChange={(e) => setYIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>{col || `Column ${i + 1}`}</option>
            ))}
          </select>
        </label>
        <label>
          Z-axis:
          <select value={zIndex} onChange={(e) => setZIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>{col || `Column ${i + 1}`}</option>
            ))}
          </select>
        </label>

        <button onClick={handleDownload} className="download-btn">
          ⬇️ Download CSV
        </button>
      </div>

      <div className="chart-wrapper">
        <Plot
          data={[
            {
              x: x,
              y: y,
              z: z,
              type: "mesh3d",
              opacity: 0.8,
              color: "#60a5fa",
            },
          ]}
          layout={{
            title: "3D Area Mesh",
            scene: {
              xaxis: { title: data[0][xIndex] },
              yaxis: { title: data[0][yIndex] },
              zaxis: { title: data[0][zIndex] },
            },
            margin: { l: 0, r: 0, b: 0, t: 30 },
          }}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </div>
  );
};

export default Area3DChart;
