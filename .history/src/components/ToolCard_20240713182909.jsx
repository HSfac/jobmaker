import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ToolCard.css';

const ToolCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="tool-card" onClick={handleClick}>
      <div className="badge">chatGPT</div>
      <div className="content">
        <div className="header">
          <h3>{title}</h3>
          <img src={image} alt={title} className="icon" />
 
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
