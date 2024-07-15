import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import InfosPage from './pages/InfosPage';
import CommunityPage from './pages/CommunityPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmailSignupPage from './pages/EmailSignupPage';

import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/infos" element={<InfosPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/email-signup" element={<EmailSignupPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
