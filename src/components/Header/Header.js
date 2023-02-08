import React from 'react';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const handleLogOut = async () => {
    try {
      await signOut();
      setUser(null);
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
