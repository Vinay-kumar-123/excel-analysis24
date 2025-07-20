// ThreeDBubbleChart.jsx

import React, { useState } from "react";
import Plot from "react-plotly.js";
import download from "downloadjs";

const ThreeDBubbleChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);
  const [zIndex, setZIndex] = useState(2);
  const [sizeIndex, setSizeIndex] = useState(3);

  if (!data || data.length < 2) {
    return (
      <p className="text-red-500 mt-4">
        Please upload data with at least 4 columns for 3D Bubble Chart.
      </p>
    );
  }

  const x = data.slice(1).map((row) => Number(row[xIndex]));
  const y = data.slice(1).map((row) => Number(row[yIndex]));
  const z = data.slice(1).map((row) => Number(row[zIndex]));
  const size = data.slice(1).map((row) => Number(row[sizeIndex]) * 5);

  const handleDownload = () => {
    const header = [
      data[0][xIndex],
      data[0][yIndex],
      data[0][zIndex],
      data[0][sizeIndex],
    ];
    const rows = data.slice(1).map((row) => [
      row[xIndex],
      row[yIndex],
      row[zIndex],
      row[sizeIndex],
    ]);
    const csvContent = [header, ...rows]
      .map((r) => r.map((c) => `"${c}"`).join(","))
      .join("\n");
    download(csvContent, "3d_bubble_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="chart-title">🎯 3D Bubble Chart</h3>

      <div className="chart-filters">
        {["X-axis", "Y-axis", "Z-axis", "Size"].map((label, i) => (
          <label key={i}>
            {label}:
            <select
              value={[xIndex, yIndex, zIndex, sizeIndex][i]}
              onChange={(e) => {
                const newVal = Number(e.target.value);
                if (label === "X-axis") setXIndex(newVal);
                if (label === "Y-axis") setYIndex(newVal);
                if (label === "Z-axis") setZIndex(newVal);
                if (label === "Size") setSizeIndex(newVal);
              }}
            >
              {data[0].map((col, j) => (
                <option key={j} value={j}>
                  {col || `Column ${j + 1}`}
                </option>
              ))}
            </select>
          </label>
        ))}

        <button onClick={handleDownload} className="download-btn">
          ⬇️ Download CSV
        </button>
      </div>

      <div className="chart-wrapper">
        <Plot
          data={[
            {
              x,
              y,
              z,
              mode: "markers",
              type: "scatter3d",
              marker: {
                size,
                color: z,
                colorscale: "Bluered",
                opacity: 0.8,
              },
              text: z.map((val, i) =>
                `${data[0][xIndex]}: ${x[i]}, ${data[0][yIndex]}: ${y[i]}, ${data[0][zIndex]}: ${z[i]}`
              ),
              hoverinfo: "text",
            },
          ]}
          layout={{
            autosize: true,
            margin: { l: 0, r: 0, b: 0, t: 30 },
            scene: {
              xaxis: { title: data[0][xIndex] },
              yaxis: { title: data[0][yIndex] },
              zaxis: { title: data[0][zIndex] },
            },
          }}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </div>
  );
};

export default ThreeDBubbleChart;
