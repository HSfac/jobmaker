import React from 'react';
import './AlertModal.css';

const AlertModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>나의 알림</h2>
        <p>여기에 알림 내용이 표시됩니다.</p>
      </div>
    </div>
  );
};

export default AlertModal;
