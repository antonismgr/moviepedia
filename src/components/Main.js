import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../services/useFetch";
import Button from "./Button";
import "./Main_design.css";

const Main = () => {
  const [moviename, setMovieName] = useState("");
  const [tempMovie, setTempMovie] = useState("");
  const [movieSelected, setMovieSelected] = useState(false);
  const search = () => {
    setMovieName(tempMovie);
    setMovieSelected(false);
  };
  const { movie } = useFetch(
    `http://www.omdbapi.com/?s=${moviename}&apikey=4335f9ff`
  );

  const handleChange = (event) => {
    setTempMovie(event.target.value);
  };

  return (
    <div className="main">
      <div className="navigation">
        <div className="searchbar">
          <input type="text" onChange={handleChange} />
          <Button title="Search" action={search} />
        </div>
      </div>

      <MovieCard
        name={movie}
        selectedset={setMovieSelected}
        selected={movieSelected}
      />
    </div>
  );
};

export default Main;
