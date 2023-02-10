import React from 'react';
import { useParams } from 'react-router-dom';
import { useBulletin } from '../../hooks/UseBulletin.js';
import BulletinForm from './BulletinForm.js';

export default function EditBulletin() {
  const { id } = useParams();
  const { bulletinDetail, loading, error } = useBulletin(id);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <BulletinForm {...bulletinDetail} />
    </div>
  );
}
