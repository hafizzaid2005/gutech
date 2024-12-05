import React from "react";
import "./UserInfo.css";

const UserInfo = ({ userData }) => {
  const { name, email, role, profilePicture } = userData;

  // Color-code for roles
  const roleColor =
    role === "Administrator"
      ? "red"
      : role === "Manager"
      ? "blue"
      : "green";

  return (
    <div className="user-info card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-pic" />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>
        Role: <span style={{ color: roleColor }}>{role}</span>
      </p>
    </div>
  );
};

export default UserInfo;
