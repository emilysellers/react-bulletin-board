import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
      history.push('/auth/sign-in');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="header">
      <h1>Community Bulletin Board</h1>
      {user && (
        <>
          <div>Welcome {user.email}</div>
          <button onClick={handleLogOut}>Logout</button>
        </>
      )}
    </div>
  );
}
