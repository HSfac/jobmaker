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
      <div className="card-header">
        <img src={image} alt={title} className="icon" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
