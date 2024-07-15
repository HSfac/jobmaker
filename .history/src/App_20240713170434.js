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

import ResumeGeneratorPage from './pages/tools/ResumeGeneratorPage';
import PhotoGeneratorPage from './pages/tools/PhotoGeneratorPage';
import InterviewQuestionsGeneratorPage from './pages/tools/InterviewQuestionsGeneratorPage';
import TechTreeGeneratorPage from './pages/tools/TechTreeGeneratorPage';
import JobMatchingPage from './pages/tools/JobMatchingPage';
import AIInterviewerPage from './pages/tools/AIInterviewerPage';

import MainLayout from './layouts/MainLayout'; // 새로 생성한 레이아웃 컴포넌트
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/email-signup" element={<EmailSignupPage />} />
          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/infos" element={<InfosPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/tools/resume-generator" element={<ResumeGeneratorPage />} />
            <Route path="/tools/photo-generator" element={<PhotoGeneratorPage />} />
            <Route path="/tools/interview-questions-generator" element={<InterviewQuestionsGeneratorPage />} />
            <Route path="/tools/tech-tree-generator" element={<TechTreeGeneratorPage />} />
            <Route path="/tools/job-matching" element={<JobMatchingPage />} />
            <Route path="/tools/ai-interviewer" element={<AIInterviewerPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
