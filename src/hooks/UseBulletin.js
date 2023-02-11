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
        // console.log('in useBulletin useEffect data', data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
    // console.log('in useBulletin useEffect bulletinDetail', bulletinDetail);
  }, [id]);
  return { bulletinDetail, loading, error, setError };
}
