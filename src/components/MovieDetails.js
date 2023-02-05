import styles from "./MovieDetails.module.css";
import imdblogo from "../logo/imdb.png";
import ytlogo from "../logo/yt.png";
import Button from "./Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import star from "../logo/star.png";
import "animate.css";

const MovieDetails = ({ movie, addToMyList, myList }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.moviedetails}>
        <div className={styles.details_1}>
          <img src={movie.Poster} alt="" width="350px" />
        </div>
        <div className={styles.details_2}>
          <div className={styles.moviehead}>
            <h1>{movie.Title}</h1>
          </div>
          <h2>{movie.Year}</h2>
          <div className={styles.rating}>
            <span className={styles.label}>Rating : {movie.imdbRating}</span>
            {/* <img src={star} width="30px" /> */}
          </div>
          <h3>
            <span className={styles.label}>Director</span> : {movie.Director}
          </h3>
          <h3>
            <span className={styles.label}>Writer</span> : {movie.Writer}
          </h3>
          <h3>
            <span className={styles.label}>Actors</span> : {movie.Actors}
          </h3>
          <h3>
            <span className={styles.label}>Awards</span> : {movie.Awards}
          </h3>
          <h3>
            <span className={styles.label}>BoxOffice</span> : {movie.BoxOffice}
          </h3>
          <h3>
            <span className={styles.label}>Rated</span> : {movie.Rated}
          </h3>
          <h3>
            <span className={styles.label}>Runtime</span> : {movie.Runtime}
          </h3>
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
              href={
                "https://www.youtube.com/results?search_query=" +
                movie.Title +
                " trailer"
              }
              target="_blank"
            >
              <img src={ytlogo} alt="" width="50px" />
            </a>
            {
              <div className={styles.addbutton}>
                <Button
                  title={<FavoriteIcon />}
                  action={() => {
                    if (
                      myList.filter((m) => m.id === movie.imdbID).length === 0
                    ) {
                      addToMyList(
                        movie.Title,
                        movie.Poster,
                        movie.imdbID,
                        movie.Year
                      );
                    }
                  }}
                  color="error"
                  variant="contained"
                  size="small"
                />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
