import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import './Bulletins.css';

export default function BulletinCard({ title, description, user_id, id }) {
  const { user } = useUser();
  //   check if logged in user is bulletin owner
  const bulletinOwner = user.id === user_id;
  return (
    <div className="bulletin-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* if bulletin owner is logged in user - display link to edit */}
      {bulletinOwner && (
        <p>
          <Link to={`./bulletins/edit/${id}`}>Edit </Link>
        </p>
      )}
    </div>
  );
}
