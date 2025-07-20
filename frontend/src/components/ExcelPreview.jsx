import React from "react";
import { Link } from "react-router-dom";
const ExcelPreview = ({ data, fileName }) => {
  const rowCount = data.length;

  // Ensures all rows have same number of columns
  const columnCount = Math.max(...data.map(row => row.length));

  return (
    <div className="excel-preview">
      <h2 className="excel-title">File Preview</h2>

      <div className="excel-meta">
        <p><span>File Name:</span> {fileName}</p>
        <p><span>Rows:</span> {rowCount}</p>
        <p><span>Columns:</span> {columnCount}</p>
      </div>

      <div className="excel-table-wrapper">
        <table className="excel-table">
          <thead>
            <tr>
              {Array.from({ length: columnCount }).map((_, i) => (
                <th key={i}>{data[0]?.[i] || `Column ${i + 1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columnCount }).map((_, colIndex) => (
                  <td key={colIndex}>{row[colIndex] ?? "-"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="excel-footer">Showing {rowCount} rows</div>
      </div>

      <div className="excel-button-wrapper">
        <Link to="/tabSection" state={{ data }}>
        <button className="excel-continue-button">📊Continue to Analysis</button>
        </Link>
        
      </div>
    </div>
  );
};

export default ExcelPreview;
