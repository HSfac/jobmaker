import React, { useState } from 'react';
import { FaHome, FaSearch, FaComments, FaUser, FaBell, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo" onClick={toggleSidebar}>
        <FaBars />
        {isOpen && <span>Jobmaker</span>}
      </div>
      <ul className="menu">
        <li>
          <Link to="/main">
            <FaHome />
            {isOpen && <span>취업도구</span>}
          </Link>
        </li>
        <li>
          <Link to="/infos">
            <FaSearch />
            {isOpen && <span>채용정보</span>}
          </Link>
        </li>
        <li>
          <Link to="/community">
            <FaComments />
            {isOpen && <span>커뮤니티</span>}
          </Link>
        </li>
        <li>
          <Link to="/mypage">
            <FaUser />
            {isOpen && <span>마이페이지</span>}
          </Link>
        </li>
        <li>
          <Link to="/alerts">
            <FaBell />
            {isOpen && <span>나의 알림</span>}
          </Link>
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
