import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SearchPage.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, [query]);
  console.log(query);

  console.log(results);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2cc89f99808c3df47a4b6f914db889d7&query=${query}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h3>SearchPage</h3>
      <div className={styles.wrapper}>
        {results.map((result) => (
          <MovieCard key={result.id} movie={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
