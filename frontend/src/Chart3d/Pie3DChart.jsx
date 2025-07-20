// Pie3DChart.jsx

import React, { useState } from "react";
import Plot from "react-plotly.js";
import download from "downloadjs";

const Pie3DChart = ({ data }) => {
  const [labelIndex, setLabelIndex] = useState(0);
  const [valueIndex, setValueIndex] = useState(1);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const labels = data.slice(1).map((row) => String(row[labelIndex]));
  const values = data.slice(1).map((row) => Number(row[valueIndex]));

  const handleDownload = () => {
    const header = [data[0][labelIndex], data[0][valueIndex]];
    const rows = data.slice(1).map((row) => [row[labelIndex], row[valueIndex]]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    download(csvContent, "3d_pie_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">🍰 3D Pie Chart</h3>

      <div className="chart-filters mb-4 flex gap-4 flex-wrap items-center">
        <label className="text-sm">
          Label:
          <select
            className="ml-2 p-1 border rounded"
            value={labelIndex}
            onChange={(e) => setLabelIndex(Number(e.target.value))}
          >
            {data[0].map((col, i) => (
              <option key={i} value={i}>
                {col || `Column ${i + 1}`}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm">
          Value:
          <select
            className="ml-2 p-1 border rounded"
            value={valueIndex}
            onChange={(e) => setValueIndex(Number(e.target.value))}
          >
            {data[0].map((col, i) => (
              <option key={i} value={i}>
                {col || `Column ${i + 1}`}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={handleDownload}
          className="download-btn ml-auto"
        >
          ⬇️ Download CSV
        </button>
      </div>

      <div className="chart-wrapper">
        <Plot
          data={[
            {
              type: "pie",
              labels,
              values,
              hole: 0.4,
              marker: {
                colors: [
                  "#3b82f6",
                  "#10b981",
                  "#f59e0b",
                  "#ef4444",
                  "#6366f1",
                  "#e11d48",
                  "#0ea5e9",
                  "#22c55e",
                ],
              },
              textinfo: "label+percent",
              hoverinfo: "label+value",
            },
          ]}
          layout={{
            title: `${data[0][valueIndex]} by ${data[0][labelIndex]}`,
            showlegend: true,
            height: 400,
          }}
          config={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default Pie3DChart;
