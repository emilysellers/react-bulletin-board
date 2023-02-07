import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext.js';
import { authUser } from '../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/bulletins" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      console.log(newUser);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p>Welcome! Please sign in or sign up</p>
      <div>
        <NavLink to="/auth/sign-in">Sign in</NavLink>
        <NavLink to="/auth/sign-up">Sign up</NavLink>
      </div>
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
