// ProfileCard.js
import React from "react";
import './profile.css'; 

const ProfileCard = ({ name, age, occupation, location }) => {
  return (
    
    <div className="profile-card">
      <h2>Hello,{name}</h2>
      <p>Age:{age}</p>
      <p>Occupation:{occupation}</p>
      <p>Location:{location}</p>
    </div>
  );
};

export default ProfileCard;
