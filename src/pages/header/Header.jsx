import React from 'react';
import './header.css'
const Header = () => {
  return (
    <div >
      <header class='container'>
        <nav class='nav'>
          <ul>
            <li><a href="#">Товары</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Компания</a></li>
            <li><a href="#">Личный кабинет</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;