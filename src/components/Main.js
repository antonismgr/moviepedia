import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import useFetch from "../services/useFetch";
import Button from "./Button";
import "./Main_design.css";

const Main = () => {
  const [resultsFound, setResultsFound] = useState(false);
  const [moviename, setMoviename] = useState("");
  const search = () => setResultsFound(true);
  const { movie } = useFetch(
    `http://www.omdbapi.com/?s=${moviename}&apikey=4335f9ff`
  );

  const handleChange = (event) => {
    setMoviename(event.target.value);
  };

  return (
    <div className="main">
      <div className="navigation">
        <div className="searchbar">
          <input type="text" onChange={handleChange} />
          <Button title="Search" action={search} />
        </div>
      </div>

      {resultsFound === true && <MovieCard name={movie} />}
    </div>
  );
};

export default Main;
