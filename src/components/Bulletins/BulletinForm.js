import React from 'react';
import './Bulletins.css';

export default function BulletinForm({ title = '', description = '' }) {
  return (
    <div className="bulletin-form">
      <label>Title</label>
      <input></input>
      <label>Description</label>
      <textarea></textarea>
      <button>Submit</button>
    </div>
  );
}
