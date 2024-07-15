import React, { useState } from 'react';
import SocialLoginButton from '../components/SocialLoginButton';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
  };

  return (
    <div className="login-page">
      <h1>Jobmaker</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
      <div className="links">
        <a href="/find-id">아이디 찾기</a> | <a href="/find-password">비밀번호 찾기</a>
      </div>
      <div className="social-login">
        <SocialLoginButton provider="kakao" />
        <SocialLoginButton provider="naver" />
        <SocialLoginButton provider="google" />
      </div>
      <div className="signup-link">
        아직 회원이 아니신가요? <a href="/signup">가입하기</a>
      </div>
    </div>
  );
};

export default LoginPage;
