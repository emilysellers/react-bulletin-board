import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { authUser } from '../services/auth.js';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/bulletins" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
  };

  return (
    <div className="auth-form">
      <div>
        <p>Welcome! Please sign in.</p>
        <div className="auth-links">
          <NavLink to="/auth/sign-in">Sign in</NavLink>
          <NavLink to="/auth/sign-up">Sign up</NavLink>
        </div>
      </div>
      <div style={{ color: 'red' }}>{error}</div>
      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitAuth}>Submit</button>
    </div>
  );
}
