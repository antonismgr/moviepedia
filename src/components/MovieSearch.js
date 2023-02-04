import GetMovieDetails from "../services/GetMovieDetails";
import MovieDetails from "./MovieDetails";
import "./MovieSearch_design.css";

const MovieSearch = ({ name, movieSelected, idm, viewMovie }) => {
  const { movieid } = GetMovieDetails(
    `https://www.omdbapi.com/?i=${idm}&apikey=4335f9ff`
  );

  return (
    <div>
      {movieSelected === false && (
        <div className="moviesearch">
          {name &&
            name.map((x) => (
              <div className="movies">
                <img
                  src={x.Poster}
                  alt=""
                  onClick={() => viewMovie(x.imdbID, x.Title, x.Poster)}
                />
              </div>
            ))}
        </div>
      )}
      {movieSelected === true && <MovieDetails movie={movieid} />}
    </div>
  );
};

export default MovieSearch;
