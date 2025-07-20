
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import download from "downloadjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const [valueIndex, setValueIndex] = useState(1);
  const [labelIndex, setLabelIndex] = useState(0);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">No data available for chart.</p>;
  }

  const labels = data.slice(1).map((row) => String(row[labelIndex]));
  const values = data.slice(1).map((row) => Number(row[valueIndex]));

  const chartData = {
    labels,
    datasets: [
      {
        label: data[0][valueIndex],
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#66BB6A",
          "#EF5350",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          color: "#333",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  const handleDownload = () => {
    const header = [data[0][labelIndex], data[0][valueIndex]];
    const rows = data.slice(1).map((row) => [row[labelIndex], row[valueIndex]]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    download(csvContent, "pie_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="text-lg font-bold text-center mb-4 text-blue-700">🍰 Favorite Activities (Pie Chart)</h3>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-4 flex-wrap">
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
        </div>

        <button
          onClick={handleDownload}
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
        >
          ⬇️ Download CSV
        </button>
      </div>

      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
