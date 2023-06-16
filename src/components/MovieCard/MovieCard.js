import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
