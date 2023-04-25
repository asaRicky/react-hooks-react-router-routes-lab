import React from "react";
import { directors } from "../data";

function Directors() {
  const directors = [
    {
      name: 'Director 1',
      movies: ['Movie 1', 'Movie 2'],
    },
    {
      name: 'Director 2',
      movies: ['Movie 3', 'Movie 4'],
    },
    {
      name: 'Director 1',
      movies: ['Movie 5', 'Movie 6'],
    },
  ];

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  );
}

export default Directors;
