import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jobmaker</div>
      <div className="nav-links">
        <a href="/login">로그인</a> | <a href="/signup">회원가입</a>
      </div>
    </header>
  );
};

export default Header;
