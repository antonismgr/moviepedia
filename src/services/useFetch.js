import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data.Search);
      });
  }, [url]);

  return { movie };
};

export default useFetch;
