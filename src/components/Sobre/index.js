import React from 'react';
import './style.css';
import profileImage from '../../assets/profile-image.jpg';

const GithubButton = () => {
  return (
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="Github logo"
        width="80"
        height="80"
      />
    </a>
  );
};

export default function Sobre() {
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="profile-name">Criado por Aaron Wendell Moreira da Silva Campos</p>
      <GithubButton/>
    </div>
  );
}
