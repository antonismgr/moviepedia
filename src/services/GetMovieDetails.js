import { useState, useEffect } from "react";

const GetMovieDetails = (url) => {
  const [movieid, setMovieId] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovieId(data);
      });
  }, [url]);
  return { movieid };
};

export default GetMovieDetails;
