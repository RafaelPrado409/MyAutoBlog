import React from 'react';

import './styles.css';

import logo from '../../assets/mini-logo.jpg';
import profile from '../../assets/mini-profile.png';

const header: React.FC = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <img src={logo} alt="Intercontinental" />
        <img src={profile} alt="Profile" />
      </div>
    </header>
  );
};

export default header;
