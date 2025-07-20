// PowerMap.jsx

import React, { useState } from "react";
import Plot from "react-plotly.js";
import download from "downloadjs";

const PowerMap = ({ data }) => {
  const [latIndex, setLatIndex] = useState(0);
  const [lonIndex, setLonIndex] = useState(1);
  const [valueIndex, setValueIndex] = useState(2);

  if (!data || data.length < 2) {
    return <p className="text-red-500 mt-4">📛 No data available for Power Map.</p>;
  }

  const latitudes = data.slice(1).map((row) => parseFloat(row[latIndex]));
  const longitudes = data.slice(1).map((row) => parseFloat(row[lonIndex]));
  const values = data.slice(1).map((row) => parseFloat(row[valueIndex]));

  const handleDownload = () => {
    const header = [data[0][latIndex], data[0][lonIndex], data[0][valueIndex]];
    const rows = data.slice(1).map((row) => [row[latIndex], row[lonIndex], row[valueIndex]]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    download(csvContent, "power_map_data.csv", "text/csv");
  };

  return (
    <div className="chart-container mt-6 p-4 border rounded bg-white shadow">
      <h3 className="chart-title">🌍 Power Map (Geographical Distribution)</h3>

      <div className="chart-filters">
        <label>
          Latitude:
          <select value={latIndex} onChange={(e) => setLatIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>
                {col || `Column ${i + 1}`}
              </option>
            ))}
          </select>
        </label>

        <label>
          Longitude:
          <select value={lonIndex} onChange={(e) => setLonIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>
                {col || `Column ${i + 1}`}
              </option>
            ))}
          </select>
        </label>

        <label>
          Value:
          <select value={valueIndex} onChange={(e) => setValueIndex(Number(e.target.value))}>
            {data[0].map((col, i) => (
              <option key={i} value={i}>
                {col || `Column ${i + 1}`}
              </option>
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
              type: "scattergeo",
              mode: "markers",
              lat: latitudes,
              lon: longitudes,
              marker: {
                size: values.map((v) => Math.sqrt(v) * 4), // size relative to value
                color: values,
                colorscale: "YlOrRd",
                colorbar: { title: data[0][valueIndex] },
                line: { color: "#333", width: 0.5 },
              },
              text: values.map((v, i) => `${data[0][valueIndex]}: ${v}`),
              hoverinfo: "text",
            },
          ]}
          layout={{
            title: "📌 Power Map Overview",
            geo: {
              scope: "world",
              projection: { type: "natural earth" },
              showland: true,
              landcolor: "#e5ecf6",
              countrycolor: "#d6d6d6",
            },
            margin: { t: 30, r: 0, l: 0, b: 0 },
          }}
          style={{ width: "100%", height: "500px" }}
        />
      </div>
    </div>
  );
};

export default PowerMap;
