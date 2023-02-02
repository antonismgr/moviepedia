import { useState } from "react";
import GetMovieDetails from "../services/GetMovieDetails";
import MovieDetails from "./MovieDetails";
import "./MovieCard_design.css";

const MovieCard = ({ name }) => {
  const [idm, setIdm] = useState("tt0499549");

  const viewMovie = (id) => {
    setIdm(id);
    setMovieSelected(true);
  };
  const [movieSelected, setMovieSelected] = useState(false);

  const { movieid } = GetMovieDetails(
    `https://www.omdbapi.com/?i=${idm}&apikey=4335f9ff`
  );

  return (
    <div>
      {movieSelected === false && (
        <div className="moviecard">
          {name &&
            name.map((x) => (
              <div className="movies">
                <img
                  src={x.Poster}
                  alt=""
                  onClick={() => viewMovie(x.imdbID)}
                />
              </div>
            ))}
        </div>
      )}
      {movieSelected === true && <MovieDetails movie={movieid} />}
    </div>
  );
};

export default MovieCard;
