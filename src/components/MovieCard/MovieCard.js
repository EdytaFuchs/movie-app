import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;
  const imageUrl = "https://image.tmdb.org/t/p/w500/${poster_path}";

  return (
    <div className={styles.card}>
      <img className={styles.poster} src={imageUrl} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
