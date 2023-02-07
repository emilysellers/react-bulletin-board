import { useEffect, useState } from 'react';
import { getBulletins } from '../services/bulletins.js';

export function useBulletins() {
  const [bulletins, setBulletins] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBulletins();
        setBulletins(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { bulletins, error, loading };
}
