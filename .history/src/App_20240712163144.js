import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmailSignupPage from './pages/EmailSignupPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import MainPage from './pages/MainPage';
import InfosPage from './pages/InfosPage';
import CommunityPage from './pages/CommunityPage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/email-signup" element={<EmailSignupPage />} />
          <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/infos" element={<InfosPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
