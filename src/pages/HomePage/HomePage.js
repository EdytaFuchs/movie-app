import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { useFetch } from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';

const HomePage = () => {
  const playingMovies = useFetch('movie/now_playing');
  const popularMovies = useFetch('movie/popular');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const bannerMovie = playingMovies.data[0];

  // console.log(bannerMovie);
  //* console.log(popularMovies.data);

  if (!bannerMovie) return;

  const bannerImage = `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`;

  const navigateToSearch = () => {
    if (query.length < 3) return;
    navigate(`/search/${query}`);
  };

  console.log(query);
  return (
    <div>
      <div className={styles.browser}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type o movie title"
        ></input>
        <button onClick={navigateToSearch}>Search</button>
      </div>
      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className={styles.banner}
      >
        <h1 className={styles.vote}>{bannerMovie.vote}</h1>
        <Link className={styles.link} to="/">
          Oglądaj
        </Link>
      </div>

      <section>
        <h2>Najpopularniejsze</h2>
        <div className={styles.contener}>
          {popularMovies.data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
