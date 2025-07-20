// ThreeDBarChart.jsx
import React, { useState } from "react";
import Plot from "react-plotly.js";
import download from "downloadjs";

const ThreeDBarChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);
  const [zIndex, setZIndex] = useState(2);

  if (!data || data.length < 2) return <p>No data available</p>;

  const x = data.slice(1).map((row) => row[xIndex]);
  const y = data.slice(1).map((row) => row[yIndex]);
  const z = data.slice(1).map((row) => row[zIndex]);

  const handleDownload = () => {
    const header = [data[0][xIndex], data[0][yIndex], data[0][zIndex]];
    const rows = data.slice(1).map((row) => [row[xIndex], row[yIndex], row[zIndex]]);
    const csv = [header, ...rows].map((r) => r.join(",")).join("\n");
    download(csv, "3d_bar_chart.csv", "text/csv");
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">📦 3D Bar Chart</h3>

      <div className="chart-filters">
        {["X", "Y", "Z"].map((axis, i) => (
          <label key={axis}>
            {axis}-axis:
            <select
              value={[xIndex, yIndex, zIndex][i]}
              onChange={(e) => [setXIndex, setYIndex, setZIndex][i](+e.target.value)}
            >
              {data[0].map((col, idx) => (
                <option key={idx} value={idx}>{col}</option>
              ))}
            </select>
          </label>
        ))}

        <button onClick={handleDownload} className="download-btn">⬇️ Download CSV</button>
      </div>

      <Plot
        data={[
          {
            
            x,
            y,
            z,
            type: "scatter3d",
            mode: "markers",
            marker: {
              size: 5,
              color: z,
              colorscale: "Viridis",
              showscale: true,
            },
          },
        ]}
        layout={{
          autosize: true,
          scene: {
            xaxis: { title: data[0][xIndex] },
            yaxis: { title: data[0][yIndex] },
            zaxis: { title: data[0][zIndex] },
          },
        }}
        useResizeHandler
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default ThreeDBarChart;
