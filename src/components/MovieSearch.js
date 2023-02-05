import GetMovieDetails from "../services/GetMovieDetails";
import MovieDetails from "./MovieDetails";
import styles from "./MovieSearch.module.css";
import "animate.css";

const MovieSearch = ({
  name,
  showMovieDetails,
  idMovie,
  viewMovie,
  addToMyList,
  myList,
}) => {
  const { movieid } = GetMovieDetails(
    `https://www.omdbapi.com/?i=${idMovie}&apikey=4335f9ff`
  );

  return (
    <div className={styles.container}>
      {showMovieDetails === false && (
        <div className={styles.moviesearch}>
          {name &&
            name.map((x) => (
              <div className={styles.movies} key={x.imdbID}>
                <img
                  src={x.Poster}
                  alt=""
                  onClick={() => viewMovie(x.imdbID, x.Title, x.Poster, x.Year)}
                  className="animate__animated animate__zoomIn"
                />
              </div>
            ))}
        </div>
      )}
      {showMovieDetails === true && (
        <MovieDetails
          movie={movieid}
          addToMyList={addToMyList}
          myList={myList}
        />
      )}
    </div>
  );
};

export default MovieSearch;
