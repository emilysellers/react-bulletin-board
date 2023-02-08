import React from 'react';
import './Bulletins.css';

export default function BulletinCard({ title, description }) {
  return (
    <div className="bulletin-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
