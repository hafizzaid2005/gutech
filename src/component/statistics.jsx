import React from "react";
import "./Statistics.css";

const Statistics = ({ statisticsData }) => {
  const { totalUsers, activeUsers, newSignups, activePercentage } = statisticsData;

  return (
    <div className="statistics card">
      <h2>Statistics</h2>
      <ul>
        <li>Total Users: {totalUsers}</li>
        <li>Active Users: {activeUsers}</li>
        <li>New Signups: {newSignups}</li>
      </ul>
      <div className="progress-bar-container">
        <label>Active Users Percentage:</label>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${activePercentage}%` }}
          ></div>
        </div>
        <p>{activePercentage}%</p>
      </div>
    </div>
  );
};

export default Statistics;
