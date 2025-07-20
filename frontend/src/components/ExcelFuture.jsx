import React from "react";

const ExcelFuture = () => {
  return (
    <>
      <div className="excel-section">
        <canvas
          className="background-canvas"
          width="3040"
          height="2914"
        ></canvas>
        <div className="container">
          <div className="heading">
            <h2 className="title">
              Complete Excel Analytics Solution with Beautiful Animations
            </h2>
            <p className="subtitle">
              From data import to AI-powered insights, we provide everything you
              need for professional data analysis with stunning visual effects
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card hover-lift">
              <canvas
                className="card-bg-canvas"
                width="670"
                height="368"
              ></canvas>
              <div className="feature-icon excel-import">📊</div>
              <h3 className="feature-title">Excel Import</h3>
              <p className="feature-description">
                Seamlessly upload .xls and .xlsx files with automatic data
                parsing and animated column detection
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  Drag & drop interface
                </li>
                <li style={{ animationDelay: "0.2s" }}>
                  Automatic data validation
                </li>
                <li style={{ animationDelay: "0.3s" }}>Real-time preview</li>
                <li style={{ animationDelay: "0.4s" }}>Large file support</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="feature-card hover-lift">
              <div className="feature-icon interactive-charts">📈</div>
              <h3 className="feature-title">Interactive Charts</h3>
              <p className="feature-description">
                Create stunning visualizations with our advanced charting engine
                and smooth animations
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  15+ chart types (2D & 3D)
                </li>
                <li style={{ animationDelay: "0.2s" }}>
                  Real-time customization
                </li>
                <li style={{ animationDelay: "0.3s" }}>Responsive design</li>
                <li style={{ animationDelay: "0.4s" }}>Interactive legends</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="feature-card hover-lift">
              <div className="feature-icon export-share">💾</div>
              <h3 className="feature-title">Export & Share</h3>
              <p className="feature-description">
                Export your visualizations in multiple professional formats with
                animated previews
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  PNG, JPEG, PDF exports
                </li>
                <li style={{ animationDelay: "0.2s" }}>CSV data downloads</li>
                <li style={{ animationDelay: "0.3s" }}>
                  High-resolution output
                </li>
                <li style={{ animationDelay: "0.4s" }}>Batch export options</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="feature-card hover-lift">
              <div className="feature-icon data-history">🗂️</div>
              <h3 className="feature-title">Data History</h3>
              <p className="feature-description">
                Comprehensive tracking and management of all your data and
                charts with timeline animations
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  Upload history tracking
                </li>
                <li style={{ animationDelay: "0.2s" }}>Saved chart library</li>
                <li style={{ animationDelay: "0.3s" }}>Version control</li>
                <li style={{ animationDelay: "0.4s" }}>
                  Quick access dashboard
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="feature-card hover-lift">
              <div className="feature-icon visualizations">🌐</div>
              <h3 className="feature-title">3D Visualizations</h3>
              <p className="feature-description">
                Advanced 3D charts, geographic mapping, and surface
                visualizations with smooth transitions
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  3D Column & Surface charts
                </li>
                <li style={{ animationDelay: "0.2s" }}>
                  Geographic Power Maps
                </li>
                <li style={{ animationDelay: "0.3s" }}>
                  Interactive 3D controls
                </li>
                <li style={{ animationDelay: "0.4s" }}>
                  Time-based animations
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="feature-card hover-lift">
              <div className="feature-icon ai-insights">🤖</div>
              <h3 className="feature-title">AI Insights</h3>
              <p className="feature-description">
                Advanced AI-powered analysis and intelligent recommendations
                with animated feedback
              </p>
              <ul className="feature-list">
                <li style={{ animationDelay: "0.1s" }}>
                  Smart chart suggestions
                </li>
                <li style={{ animationDelay: "0.2s" }}>Trend analysis</li>
                <li style={{ animationDelay: "0.3s" }}>Data insights</li>
                <li style={{ animationDelay: "0.4s" }}>
                  Automated recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExcelFuture;
