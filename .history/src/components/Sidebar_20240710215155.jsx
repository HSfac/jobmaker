import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Jobmaker</div>
      <ul className="menu">
        <li>취업도구</li>
        <li>채용정보</li>
        <li>커뮤니티</li>
        <li>마이페이지</li>
        <li>나의 알림</li>
      </ul>
      <div className="user-info">
        <div className="username">홍길동1234</div>
        <div className="email">abcd1234@naver.com</div>
        <button className="settings-btn">계정 설정</button>
        <button className="logout-btn">로그아웃</button>
      </div>
    </div>
  );
};

export default Sidebar;
