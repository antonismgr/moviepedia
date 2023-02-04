import { useState, useEffect } from "react";
import MovieSearch from "./MovieSearch";
import useFetch from "../services/useFetch";
import Button from "./Button";
import "./Main_design.css";
import ShowHistory from "./ShowHistory";

const Main = () => {
  const [moviename, setMovieName] = useState("");
  const [tempMovie, setTempMovie] = useState("");
  const [movieSelected, setMovieSelected] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showMovieSearch, setShowMovieSearch] = useState(true);
  const [idm, setIdm] = useState("tt0499549");

  const search = () => {
    setMovieName(tempMovie);
    setMovieSelected(false);
    setShowMovieSearch(true);
    setShowHistory(false);
  };

  const showhistory = () => {
    setShowHistory(true);
    setShowMovieSearch(false);
  };

  const { movie } = useFetch(
    `http://www.omdbapi.com/?s=${moviename}&apikey=4335f9ff`
  );

  const handleChange = (event) => {
    setTempMovie(event.target.value);
  };

  const viewMovie = (id, title, poster) => {
    setIdm(id);
    setMovieSelected(true);
    setHistory([...history, { name: title, poster: poster, id: id }]);
    setShowHistory(false);
  };

  return (
    <div className="main">
      <div className="navigation">
        <div className="searchbar">
          <input type="text" onChange={handleChange} />
          <Button title="Search" action={search} />
          <Button title="History" action={showhistory} />
        </div>
      </div>

      {showMovieSearch === true && (
        <MovieSearch
          name={movie}
          movieSelected={movieSelected}
          history={history}
          viewMovie={viewMovie}
          idm={idm}
        />
      )}

      {showHistory === true && <ShowHistory history={history} />}
    </div>
  );
};

export default Main;
