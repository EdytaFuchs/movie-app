import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { vote, poster_path, title } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  console.log(movie);

  return (
    <Link className={styles.card} to={`/details/${movie.id}`}>
      <div className={styles.card}>
        <img className={styles.poster} src={imageUrl} alt={title} />
        <h3 className={movie.title}></h3>
        <span className={styles.vote}>{movie.vote_average}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
