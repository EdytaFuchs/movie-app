import React from "react";
import { useParams } from "react-router-dom";

const ActorPage = () => {
  const { name } = useParams();
  return <div>ActorPage</div>;
};

export default ActorPage;
