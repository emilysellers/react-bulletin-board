import React, { useEffect, useState } from 'react';
import './Bulletins.css';

export default function BulletinForm({ title = '', description = '', submitHandler }) {
  //   internal state for tracking changes to input, only set up first time
  const [titleInput, setTitleInput] = useState({ title });
  const [descInput, setDescInput] = useState(description);

  // in the chance that new prop values are received from parents
  useEffect(() => {
    setTitleInput(title);
    setDescInput(description);
  }, [title, description]);

  console.log('====== title prop: ', title);

  return (
    <div className="bulletin-form">
      <label>Title</label>
      <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
      <label>Description</label>
      <textarea type="text" value={descInput} onChange={(e) => setDescInput(e.target.value)} />
      <button
        onClick={() => {
          submitHandler(titleInput, descInput);
        }}
      >
        Submit
      </button>
    </div>
  );
}
