// ScatterChart.jsx

import React, { useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import download from "downloadjs";

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

const ScatterChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const points = data.slice(1).map((row) => ({
    x: Number(row[xIndex]),
    y: Number(row[yIndex]),
  }));

  const chartData = {
    datasets: [
      {
        label: `${data[0][yIndex]} vs ${data[0][xIndex]}`,
        data: points,
        backgroundColor: "#34d399",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: {
        title: { display: true, text: data[0][xIndex] },
      },
      y: {
        title: { display: true, text: data[0][yIndex] },
      },
    },
  };

  const handleDownload = () => {
    const header = [data[0][xIndex], data[0][yIndex]];
    const rows = data.slice(1).map((row) => [row[xIndex], row[yIndex]]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    download(csvContent, "scatter_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">📌 Scatter Chart</h3>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-4 flex-wrap">
          <label className="text-sm">
            X-axis:
            <select
              className="ml-2 p-1 border rounded"
              value={xIndex}
              onChange={(e) => setXIndex(Number(e.target.value))}
            >
              {data[0].map((col, i) => (
                <option key={i} value={i}>
                  {col || `Column ${i + 1}`}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm">
            Y-axis:
            <select
              className="ml-2 p-1 border rounded"
              value={yIndex}
              onChange={(e) => setYIndex(Number(e.target.value))}
            >
              {data[0].map((col, i) => (
                <option key={i} value={i}>
                  {col || `Column ${i + 1}`}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          onClick={handleDownload}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          ⬇️ Download CSV
        </button>
      </div>

      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ScatterChart;
