import React from "react";
import { actors } from "../data";

function Actors() {
  const actors = [
    {
      name: 'Actor 1',
      movies: ['Movie 1', 'Movie 2'],
    },
    {
      name: 'Actor 2',
      movies: ['Movie 3', 'Movie 4'],
    },
    {
      name: 'Actor 3',
      movies: ['Movie 5', 'Movie 6'],
    },
  ];

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>(movie)</li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  );
}

export default Actors;
