import React from 'react';
import './App.css';

function Meet() {
  const users = [
    {
      name: 'Jalen Watts',
      title: 'Chief Operating Officer of Project HESTIA',
      image: 'https://randomuser.me/api/portraits'
    },
    {
      name: 'Elijah Hawes',
      title: 'Co-Founder of Project HESTIA',
      image: 'https://randomuser.me/api/portraits'
    }
  ];

  return (
    <div className="container">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img src={user.image} alt={user.name} className="profile-pic" />
          <h2>{user.name}</h2>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Meet;