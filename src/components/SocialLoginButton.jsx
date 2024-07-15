import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './SocialLoginButton.css';

const SocialLoginButton = ({ provider }) => {
  const getProviderIcon = (provider) => {
    switch (provider) {
      case 'google':
        return <FaGoogle />;
      case 'kakao':
        return <img src="/path/to/kakao-icon.png" alt="Kakao" className="custom-icon" />;
      case 'naver':
        return <img src="/path/to/naver-icon.png" alt="Naver" className="custom-icon" />;
      default:
        return null;
    }
  };

  const getProviderName = (provider) => {
    switch (provider) {
      case 'google':
        return 'Google';
      case 'kakao':
        return 'Kakao';
      case 'naver':
        return 'Naver';
      default:
        return '';
    }
  };

  return (
    <button className="social-login-button">
      {getProviderIcon(provider)}
      <span>{getProviderName(provider)} 로그인</span>
    </button>
  );
};

export default SocialLoginButton;
