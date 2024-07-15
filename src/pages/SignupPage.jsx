import React from 'react';
import SocialLoginButton from '../components/SocialLoginButton';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h1>Jobmaker</h1>
      <button className="email-signup-btn">
        <a href="/email-signup">이메일로 가입</a>
      </button>
      <div className="social-login">
        <SocialLoginButton provider="kakao" />
        <SocialLoginButton provider="naver" />
        <SocialLoginButton provider="google" />
      </div>
      <div className="login-link">
        이미 회원이신가요? <a href="/login">로그인</a>
      </div>
    </div>
  );
};

export default SignupPage;
