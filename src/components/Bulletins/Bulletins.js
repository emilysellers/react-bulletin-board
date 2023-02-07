import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { useBulletins } from '../../hooks/UseBulletins.js';

export default function Bulletins() {
  const { user } = useUser();
  const { bulletins, error, loading } = useBulletins();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div>
      {bulletins.map((bulletin) => (
        <div key={bulletin.id}>
          <h2>{bulletin.title}</h2>
          <p>{bulletin.description}</p>
        </div>
      ))}
    </div>
  );
}
