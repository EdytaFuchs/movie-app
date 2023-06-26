import React from 'react';

const ActorCard = ({ actor }) => {
  console.log(actor);
  return (
    <div>
      <h3>{actor.name}</h3>
      <span>{actor.character}</span>
    </div>
  );
};

export default ActorCard;
