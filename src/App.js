import React from "react";
import UserInfo from "./component/userinfo";
import Statistics from "./component/statistics";
import Messages from "./component/messages";
import "./App.css";

const App = () => {
  const userData = {
    name: "M.zaid",
    email: "hanzalazaidkhalid@gmail.com",
    role: "Student",
    profilePicture: "data:image/jpeg;base64,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" 

  };

  const statisticsData = {
    totalUsers: 1000,
    activeUsers: 350,
    newSignups: 50,
    activePercentage: ((350 / 1000) * 100).toFixed(2), // Calculate active percentage
  };

  const messagesData = {
    message1: "Welcome to the dashboard!",
    message2: "Don't forget to check your notifications.",
    message3: "System maintenance scheduled for tonight.",
  };

  return (
    <div className="app">
      <div className="grid-container">
        {/* User Info Component */}
        <UserInfo userData={userData} />

        {/* Statistics Component */}
        <Statistics statisticsData={statisticsData} />

        {/* Messages Component */}
        <Messages messagesData={messagesData} />
      </div>
    </div>
  );
};

export default App;
