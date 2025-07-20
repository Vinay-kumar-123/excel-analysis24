
import React from "react";


const ExcelGrid = () => {
  return (
    <div className="excel-container">
      <div className="excel-card">
        <div className="excel-header">
          <div className="excel-cell">A</div>
          <div className="excel-cell">B</div>
          <div className="excel-cell">C</div>
          <div className="excel-cell">D</div>
        </div>
        <div className="excel-row">
          <div className="excel-green">Sales</div>
          <div className="excel-green">1250</div>
          <div className="excel-empty" />
          <div className="excel-green">3400</div>
        </div>
        <div className="excel-row">
          <div className="excel-green">Profit</div>
          <div className="excel-green">890</div>
          <div className="excel-green">Growth</div>
          <div className="excel-green">15%</div>
        </div>
        <div className="excel-row">
          <div className="excel-green">Sales</div>
          <div className="excel-green">1250</div>
          <div className="excel-green">Revenue</div>
          <div className="excel-green">3400</div>
        </div>
        <div className="excel-row">
          <div className="excel-green">Profit</div>
          <div className="excel-green">890</div>
          <div className="excel-green">Growth</div>
          <div className="excel-green">15%</div>
        </div>
      </div>
      <div className="excel-formula">
        <span className="fx-label">fx</span>
        <div className="fx-input">=SUM(A1:D4)</div>
      </div>
      <div className="floating-icons">
        {[0, 500, 1000, 1500, 2000, 2500].map((delay, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{ left: `${10 + index * 15}%`, top: `${10 + (index % 3) * 10}%`, animationDelay: `${delay}ms` }}
          >
            📊
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcelGrid;
