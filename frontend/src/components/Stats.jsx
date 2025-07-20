import React from "react";
const stats = [
  {
    number: "50,000+",
    label: "Files Processed",
    icon: "📊",
    numberClass: "text-blue-400",
    animateClass: "animate-excel-data-flow",
  },
  {
    number: "1,25,000+",
    label: "Charts Created",
    icon: "📈",
    numberClass: "text-purple-400",
    animateClass: "animate-chart-morph",
  },
  {
    number: "15,000+",
    label: "Happy Users",
    icon: "👥",
    numberClass: "text-pink-400",
    animateClass: "animate-particle-dance",
  },
  {
    number: "99%",
    label: "Satisfaction Rate",
    icon: "⭐",
    numberClass: "text-green-400",
    animateClass: "animate-glow",
  },
];

const Stats = () => {
  return (
    <>
      <div className="stats-wrapper">
        <canvas className="stats-canvas" width="719" height="1142"></canvas>
        <div className="stats-gradient-overlay"></div>
        <div className="stats-container">
          <div className="text-center mb-16">
            <h2 className="stats-title">Trusted by Data Professionals</h2>
            <p className="stats-subtitle">
              Join thousands who've transformed their data analysis with
              beautiful animations
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stats-card" key={index}>
                <div className={`stats-number ${stat.numberClass}`}>
                  {stat.number}
                </div>
                <p className="stats-label">{stat.label}</p>
                <div className={`stats-icon ${stat.animateClass}`}>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
