import React, { useState } from "react";
import MovieCard from "./movieCard.js";

export default function SearchMovies() {
  //states- input query
  // array destruction
  const [query, setQuery] = useState("");
  //state for movies,
  const [movies, setMovies] = useState([]);
  //  async function that prevent form to refreshing page on submit
  const searchMovies = async (event) => {
    event.preventDefault();

    const api_key = "1617222e97e8e98e64639029d2bf411f";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      //await that promise and assigning to a variable
      const res = await fetch(url);
      // convert our respond to body of data variable and await actual data coming back
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
