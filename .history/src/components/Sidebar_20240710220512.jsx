import React, { useState } from 'react';
import { FaHome, FaSearch, FaComments, FaUser, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo" onClick={toggleSidebar}>Jobmaker</div>
      <ul className="menu">
        <li>
          <FaHome />
          {isOpen && <span>취업도구</span>}
        </li>
        <li>
          <FaSearch />
          {isOpen && <span>채용정보</span>}
        </li>
        <li>
          <FaComments />
          {isOpen && <span>커뮤니티</span>}
        </li>
        <li>
          <FaUser />
          {isOpen && <span>마이페이지</span>}
        </li>
        <li>
          <FaBell />
          {isOpen && <span>나의 알림</span>}
        </li>
      </ul>
      <div className="user-info">
        <div className="username">
          <FaUser />
          {isOpen && <span>총실한퀴카1234</span>}
        </div>
        {isOpen && <div className="email">abc1234@naver.com</div>}
        <div className="settings">
          <button className="settings-btn">
            <FaCog />
            {isOpen && <span>계정 설정</span>}
          </button>
          <button className="logout-btn">
            <FaSignOutAlt />
            {isOpen && <span>로그아웃</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
