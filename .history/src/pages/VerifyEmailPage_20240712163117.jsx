import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './VerifyEmailPage.css';

const VerifyEmailPage = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = async () => {
    // 이메일 인증 로직 추가
    setIsVerified(true);
  };

  return (
    <div className="verify-email-page">
      <h1>Jobmaker</h1>
      {isVerified ? (
        <p>인증이 완료되었습니다. <a href="/login">로그인</a>하세요.</p>
      ) : (
        <button onClick={handleVerification}>이메일 인증하기</button>
      )}
    </div>
  );
};

export default VerifyEmailPage;
