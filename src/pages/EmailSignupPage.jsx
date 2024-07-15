import React, { useState } from 'react';
import './EmailSignupPage.css';

const EmailSignupPage = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleEmailSignup = (e) => {
    e.preventDefault();
    // 이메일 인증 로직 추가
  };

  return (
    <div className="email-signup-page">
      <h1>Jobmaker</h1>
      <form onSubmit={handleEmailSignup}>
        <input
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button">인증하기</button>
        <input
          type="text"
          placeholder="인증 코드를 입력해주세요"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default EmailSignupPage;
