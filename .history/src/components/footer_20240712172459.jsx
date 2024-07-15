import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://twitter.com" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>대표: 신희성</p>
        <p>사업자등록번호: 1234</p>
        <p>주소: 1234</p>
        <p>Email: <a href="mailto:jobmaker.ai@gmail.com">jobmaker.ai@gmail.com</a></p>
        <p><a href="/privacy">개인정보 처리방침</a> | <a href="/terms">Terms of Service</a></p>
        <p>Copyright © 2024 Jobmaker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
