import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}zaid</p>
      <p>Email: {username}zaid@example.com</p>
    </div>
  );
};

export default UserProfile;
