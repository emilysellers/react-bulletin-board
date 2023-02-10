import { useEffect, useState } from 'react';
import { getBulletinDetail } from '../services/bulletins.js';

export function useBulletin(id) {
  const [bulletinDetail, setBulletinDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBulletinDetail(id);
        setBulletinDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { bulletinDetail, loading, error };
}
