import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useBulletin } from '../../hooks/UseBulletin.js';
import { updateBulletin } from '../../services/bulletins.js';
import BulletinForm from './BulletinForm.js';

export default function EditBulletin() {
  const { id } = useParams();
  const history = useHistory();
  const { bulletinDetail, loading, error, setError } = useBulletin(id);

  if (loading || !bulletinDetail) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  console.log('in EditBulletin bulletinDetail======', bulletinDetail);

  const handleSubmit = async (title, description) => {
    try {
      await updateBulletin(id, title, description);
      history.push('/bulletins');
    } catch (e) {
      setError(e.message);
    }
  };

  return <BulletinForm {...bulletinDetail} submitHandler={handleSubmit} />;
}