import React from 'react';
import './ToolCard.css';

const ToolCard = ({ title, description, image }) => {
  return (
    <div className="tool-card">
      <img src={image} alt={title} className="icon" />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
