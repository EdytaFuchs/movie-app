import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`;
  //* console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(URL);
        // console.log(response);
        const data = response.data.results
          ? response.data.results.slice(0, 5)
          : response.data;
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [endpoint]);

  return { data, error, loading };
};
