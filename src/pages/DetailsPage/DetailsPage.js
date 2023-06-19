import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./DetailsPage.module.css";

const DetailsPage = () => {
  const params = useParams();
  const movie = useFetch(`/movie/${params.id}`);

  const { original_title, poster_path, overview, release_date } = movie.data;
  console.log(movie.data);
  console.log(params);

  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{original_title}</h1>
      <div>
        <img className={styles.image} src={imageUrl} alt={original_title} />
      </div>
      <div className={styles.overview}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
      <div className={styles.release_date}>
        <h2>Release Date</h2>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
