// AreaChart.jsx

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from "chart.js";
import download from "downloadjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const AreaChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const labels = data.slice(1).map((row) => row[xIndex]);
  const values = data.slice(1).map((row) => Number(row[yIndex]));

  const chartData = {
    labels,
    datasets: [
      {
        label: `${data[0][yIndex]} vs ${data[0][xIndex]}`,
        data: values,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#60a5fa");
          gradient.addColorStop(0.5, "#93c5fd");
          gradient.addColorStop(1, "#dbeafe");
          return gradient;
        },
        borderColor: "#2563eb",
        tension: 0.4,
        pointBackgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: data[0][yIndex] },
      },
      x: {
        title: { display: true, text: data[0][xIndex] },
      },
    },
  };

  const handleDownload = () => {
    const csvContent = [data[0], ...data.slice(1)]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    download(csvContent, "area_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">📈 Area Chart</h3>

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

      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChart;
