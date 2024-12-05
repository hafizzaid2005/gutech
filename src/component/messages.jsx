import React from "react";
import "./Messages.css";

const Messages = ({ messagesData }) => {
  const { message1, message2, message3 } = messagesData;

  return (
    <div className="messages card">
      <h2>Messages</h2>
      <ul>
        <li>{message1}</li>
        <li>{message2}</li>
        <li>{message3}</li>
      </ul>
    </div>
  );
};

export default Messages;
