import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const DetailsPage = () => {
  const params = useParams();
  const movie = useFetch(`/movie/${params.id}`);

  console.log(movie.data);
  console.log(params);

  return (
    <div>
      <h1>{movie.data.original_title}</h1>
    </div>
  );
};

export default DetailsPage;
