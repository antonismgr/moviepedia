import "./MovieDetails_design.css";

const MovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <div className="moviedetails">
      <div className="details_1">
        <img src={movie.Poster} alt="" width="350px" />
      </div>
      <div className="details_2">
        <div className="moviehead">
          <h1>{movie.Title}</h1>
          <span className="rating">{movie.imdbRating}</span>
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
        <div className="imdbdata">
          <a
            href={"https://www.imdb.com/title/" + movie.imdbID + "/"}
            target="_blank"
          >
            IMDB
          </a>
          <a
            className="yt"
            href={"https://www.youtube.com/results?search_query=" + movie.Title}
            target="_blank"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

{
  /* 
              <div class="details_2">
              <div class="moviehead">
              <h1>${moviedetails.Title}</h1>
              <span class="rating">${moviedetails.imdbRating} &#11088</span>
              </div>
              <h2>${moviedetails.Year}</h2>
               <h3>Director: ${moviedetails.Director}</h3>
               <h3>Writer : ${moviedetails.Writer}</h3>
               <h3>Actors : ${moviedetails.Actors}</h3>
               <h3>Awards : ${moviedetails.Awards}</h3>
               <h3>BoxOffice : ${moviedetails.BoxOffice}</h3>
               <h3>Rated : ${moviedetails.Rated}</h3>
               <h3>Runtime : ${moviedetails.Runtime}</h3>
               
               <p>${moviedetails.Plot}</p>
               <div class="imdbdata">
               <a href="https://www.imdb.com/title/${moviedetails.imdbID}/" target="_blank"><img src="imdb.png" width="70px"></a>
               <a class="yt" href="https://www.youtube.com/results?search_query=${moviedetails.Title}" target="_blank"><img src="yt.png" width="50px"></a>
               <button class="add" onclick="addtoCollection({title:'${moviedetails.Title}',poster:'${moviedetails.Poster}',id:'${moviedetails.imdbID}',year:'${moviedetails.Year}'})"></button>
               </div>
              </div>                */
}
