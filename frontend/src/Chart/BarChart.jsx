// // // Chart/BarChart.jsx
// import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import download from "downloadjs";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// const BarChart = ({ data }) => {
//   const [xIndex, setXIndex] = useState(0);
//   const [yIndex, setYIndex] = useState(1);

//   if (!data || data.length < 2) {
//     return <p className="text-red-500 mt-4">No data available for chart.</p>;
//   }

//   const labels = data.slice(1).map(row => row[xIndex]);
//   const values = data.slice(1).map(row => Number(row[yIndex]));

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: `${data[0][yIndex]} vs ${data[0][xIndex]}`,
//         data: values,
//         backgroundColor: "#10b981", // emerald green
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: true },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   const handleDownload = () => {
//     const csvContent = [data[0], ...data.slice(1)]
//       .map(row => row.map(cell => `"${cell}"`).join(","))
//       .join("\n");
//     download(csvContent, "bar_chart_data.csv", "text/csv");
//   };

//   return (
//     <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
//         <div className="flex gap-4 flex-wrap">
//           <label className="text-sm">
//             X-axis:
//             <select
//               className="ml-2 p-1 border rounded"
//               value={xIndex}
//               onChange={e => setXIndex(Number(e.target.value))}
//             >
//               {data[0].map((col, i) => (
//                 <option key={i} value={i}>
//                   {col || `Column ${i + 1}`}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label className="text-sm">
//             Y-axis:
//             <select
//               className="ml-2 p-1 border rounded"
//               value={yIndex}
//               onChange={e => setYIndex(Number(e.target.value))}
//             >
//               {data[0].map((col, i) => (
//                 <option key={i} value={i}>
//                   {col || `Column ${i + 1}`}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>

//         <button
//           onClick={handleDownload}
//           className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
//         >
//           ⬇️ Download CSV
//         </button>
//       </div>

//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default BarChart;

// BarChart.jsx
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import download from "downloadjs";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
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
        backgroundColor: "#10b981", // emerald green
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
      },
    },
  };

  const handleDownload = () => {
    const csvHeader = `${data[0][xIndex]},${data[0][yIndex]}\n`;
    const csvRows = data
      .slice(1)
      .map((row) => `${row[xIndex]},${row[yIndex]}`)
      .join("\n");
    const csvContent = csvHeader + csvRows;
    download(csvContent, "bar_chart_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📊 Bar Chart</h2>

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
          className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
        >
          ⬇️ Download Chart Data
        </button>
      </div>

      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
