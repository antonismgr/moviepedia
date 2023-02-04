import styles from "./MovieDetails.module.css";
import imdblogo from "../logo/imdb.png";
import ytlogo from "../logo/yt.png";
import Button from "./Button";

const ListMovieDetails = ({ movie }) => {
  return (
    <div className={styles.moviedetails}>
      <div className={styles.details_1}>
        <img src={movie.Poster} alt="" width="350px" />
      </div>
      <div className={styles.details_2}>
        <div className={styles.moviehead}>
          <h1>{movie.Title}</h1>
          <span className={styles.rating}>{movie.imdbRating}</span>
        </div>
        <h2>{movie.Year}</h2>
        <h3>Director:{movie.Director}</h3>
        <h3>Writer:{movie.Writer}</h3>
        <h3>Actors:{movie.Actors}</h3>
        <h3>Awards:{movie.Awards}</h3>
        <h3>BoxOffice:{movie.BoxOffice}</h3>
        <h3>Rated:{movie.Rated}</h3>
        <h3>Runtime:{movie.Runtime}</h3>
        <p>{movie.Plot}</p>
        <div className={styles.imdbdata}>
          <a
            href={"https://www.imdb.com/title/" + movie.imdbID + "/"}
            target="_blank"
          >
            <img src={imdblogo} alt="" width="70px" />
          </a>
          <a
            className={styles.yt}
            href={"https://www.youtube.com/results?search_query=" + movie.Title}
            target="_blank"
          >
            <img src={ytlogo} alt="" width="50px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListMovieDetails;
