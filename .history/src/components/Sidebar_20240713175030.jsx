import React, { useState } from 'react';
import { FaHome, FaSearch, FaComments, FaUser, FaBell, FaCog, FaSignOutAlt, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import AlertModal from './AlertModal';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleToolsMenu = () => {
    setIsToolsOpen(!isToolsOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo" onClick={toggleSidebar}>
        <FaBars />
        {isOpen && <span>Jobmaker</span>}
      </div>
      <ul className="menu">
        <li>
          <div className="menu-item" onClick={toggleToolsMenu}>
            <FaHome />
            {isOpen && <span>취업도구</span>}
            {isOpen && (isToolsOpen ? <FaChevronUp /> : <FaChevronDown />)}
          </div>
          {isToolsOpen && (
            <ul className="submenu">
              <li>
                <Link to="/tools/resume-generator">
                  {isOpen && <span>자소서 생성기</span>}
                </Link>
              </li>
              <li>
                <Link to="/tools/photo-generator">
                  {isOpen && <span>증명사진 생성기</span>}
                </Link>
              </li>
              <li>
                <Link to="/tools/interview-questions-generator">
                  {isOpen && <span>면접예상질문 생성기</span>}
                </Link>
              </li>
              <li>
                <Link to="/tools/tech-tree-generator">
                  {isOpen && <span>테크트리 생성기</span>}
                </Link>
              </li>
              <li>
                <Link to="/tools/job-matching">
                  {isOpen && <span>잡 매칭</span>}
                </Link>
              </li>
              <li>
                <Link to="/tools/ai-interviewer">
                  {isOpen && <span>AI 면접관</span>}
                </Link>
              </li>
            </ul>
          )}
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
        <li className="menu-item" onClick={toggleModal} style={{ cursor: 'pointer' }}>
          <FaBell />
          {isOpen && <span>나의 알림</span>}
        </li>
      </ul>
      <div className="user-info">
        <div className="username">
          <FaUser />
          {isOpen && <span>총실한퀴카1234</span>}
        </div>
    
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
      {isModalOpen && <AlertModal onClose={toggleModal} />}
    </div>
  );
};

export default Sidebar;
