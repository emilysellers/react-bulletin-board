import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { useBulletins } from '../../hooks/UseBulletins.js';
import BulletinCard from './BulletinCard.js';
import './Bulletins.css';

export default function Bulletins() {
  const { user } = useUser();
  const { bulletins, error, loading } = useBulletins();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  console.log(bulletins);

  return (
    <div className="bulletin-board">
      {bulletins.map((bulletin) => (
        // <BulletinCard key={bulletin.id} title={bulletin.title} description={bulletin.description} />
        <BulletinCard key={bulletin.id} {...bulletin} />
      ))}
    </div>
  );
}
