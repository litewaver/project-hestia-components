import React from 'react';
import './App.css';

function Meet() {
  const users = [

    {
      name: 'Meet the Leaders',
      title: '',
      image: 'https://randomuser.me/api/portraits'
    },
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
    <div className="container text-gray-700 border-2 border-red-500 rounded-xl shadow-lg bg-white ">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img src={user.image} className="profile-pic" />
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Meet;