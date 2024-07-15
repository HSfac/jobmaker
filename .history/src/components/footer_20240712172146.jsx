import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Jobmaker. All rights reserved.</p>
        <p>대표: 신희성</p>
        <p>사업자등록번호: 1234</p>
        <p>주소: 1234</p>
        <p>Email: <a href="mailto:jobmaker.ai@gmail.com">jobmaker.ai@gmail.com</a></p>
        <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
