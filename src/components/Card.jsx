import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logements/${id}`} className="card">
      <div className="card-cover" style={{ backgroundImage: `url(${cover})` }}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;