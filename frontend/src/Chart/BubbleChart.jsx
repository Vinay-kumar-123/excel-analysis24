// BubbleChart.jsx

import React, { useState } from "react";
import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import download from "downloadjs";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ({ data }) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);
  const [rIndex, setRIndex] = useState(2);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const points = data.slice(1).map(row => ({
    x: Number(row[xIndex]),
    y: Number(row[yIndex]),
    r: Number(row[rIndex]) / 2 || 5,
    label: row[xIndex] || ""
  }));

  const chartData = {
    datasets: [
      {
        label: `${data[0][yIndex]} vs ${data[0][xIndex]} Bubble Chart`,
        data: points,
        backgroundColor: points.map((_, i) => [
          "#3b82f6",
          "#34d399",
          "#f97316"
        ][i % 3]),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = context.raw;
            return `X: ${item.x}, Y: ${item.y}, R: ${item.r}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: { display: true, text: data[0][xIndex] },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: data[0][yIndex] },
      },
    },
  };

  const handleDownload = () => {
    const header = [data[0][xIndex], data[0][yIndex], data[0][rIndex]];
    const rows = data.slice(1).map(row => [row[xIndex], row[yIndex], row[rIndex]]);
    const csvContent = [header, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    download(csvContent, "bubble_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-semibold mb-2">🔵 Bubble Chart (Size, X, Y)</h3>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-4 flex-wrap">
          <label className="text-sm">
            X-axis:
            <select
              className="ml-2 p-1 border rounded"
              value={xIndex}
              onChange={e => setXIndex(Number(e.target.value))}
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
              onChange={e => setYIndex(Number(e.target.value))}
            >
              {data[0].map((col, i) => (
                <option key={i} value={i}>
                  {col || `Column ${i + 1}`}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm">
            Radius:
            <select
              className="ml-2 p-1 border rounded"
              value={rIndex}
              onChange={e => setRIndex(Number(e.target.value))}
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

      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default BubbleChart;
