import React from "react";
import { movies } from "../data";

function Movies() {
  const movies = [
    {
      title: 'Movie 1',
      time: '1h 30m',
      genres: ['Action', 'Thriller'],
    },
    {
      title: 'Movie 2',
      time: '1h 45m',
      genres: ['Comedy', 'Drama'],
    },
    {
      title: 'Movie 3',
      time: '2h 10m',
      genres: ['Sci-Fi', 'Adventure'],
    },
  ];

  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => (
      <div key={index}>
        <h2>{movie.title}</h2>
        <p>{movie.item}</p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        </div>
    ))}
  </div>
  );
}

export default Movies;
