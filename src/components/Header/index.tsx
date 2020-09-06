import React from 'react';

import './styles.css';

interface HeaderProps{
  title?: string;
}

const  Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <header className="header">
      <div className="header-container"> 
        <div className="profile-group">
          <img src="https://avatars2.githubusercontent.com/u/44592740?s=460&u=521ac8a433be62cdea8fdf2a7228242a7fce4f89&v=4"></img>
          <span>Joseph Martins</span>
        </div>
        <div className="title">{title}</div>
        <div className="icon">Icone</div>
      </div>
    </header>
  );
}

export default Header;