import "./App.css";
import React, { useState, useEffect } from "react";
import MovieSearch from "../src/components/MovieSearch";
import styles from "./App.module.css";
import History from "../src/components/History";
import MyList from "../src/components/MyList";
import Search from "../src/components/Search";
import "animate.css";
import Loading from "./components/Loading";

function App() {
  const [tempMovie, setTempMovie] = useState("");
  const [idMovie, setIdMovie] = useState("tt0499549");
  const [history, setHistory] = useState([]);
  const [myList, setMyList] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showMovieSearch, setShowMovieSearch] = useState(false);
  const [showMyList, setShowMyList] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const search = () => {
    service(tempMovie);
    setShowMovieDetails(false);
    setShowHistory(false);
    setShowMyList(false);
    setShowMovieSearch(true);
  };

  const showhistory = () => {
    setShowMovieSearch(false);
    setShowMyList(false);
    setNotFound(false);
    setShowHistory(true);
  };

  const shownotfound = () => {
    setShowHistory(false);
    setShowMovieSearch(false);
    setShowMyList(false);
    setNotFound(true);
    setShowHistory(false);
  };

  const showmylist = () => {
    const sortedList = sortListByName(myList);
    setMyList(sortedList);
    setShowHistory(false);
    setShowMovieSearch(false);

    setNotFound(false);
    setShowMyList(true);
  };

  const viewMovie = (id, title, poster, year) => {
    service2(id);
    setShowMovieDetails(true);
    if (history.filter((m) => m.id === id).length === 0) {
      setHistory([
        ...history,
        { name: title, poster: poster, id: id, year: year },
      ]);
    }
    setShowHistory(false);
  };

  const addToMyList = (title, poster, id, year) =>
    setMyList([...myList, { name: title, poster: poster, id: id, year: year }]);

  const service = (movie) => {
    setShowLoading(true);
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=4335f9ff`)
      .then((data) => data.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data.Search);
          console.log(data);
          setNotFound(false);
        } else {
          console.log(data.Error);
          shownotfound();
        }
        setShowLoading(false);
      });
  };

  const service2 = (movie) => {
    setShowLoading(true);
    fetch(`https://www.omdbapi.com/?i=${movie}&apikey=4335f9ff`)
      .then((data) => data.json())
      .then((data) => {
        setIdMovie(data);
        console.log(data);
        setShowLoading(false);
      });
  };

  const handleChange = (event) => {
    setTempMovie(event.target.value);
  };

  const sortListByName = (data) => {
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return data;
  };

  const home = () => {
    setShowHistory(false);
    setShowMovieSearch(false);
    setShowMyList(false);
    setNotFound(false);
    setShowHistory(false);
  };

  return (
    <div className={styles.main}>
      <Search
        handleChange={handleChange}
        search={search}
        showhistory={showhistory}
        showmylist={showmylist}
        home={home}
      />

      {notFound && (
        <div className={styles.notfound}>
          <h1 className="animate__animated animate__bounceIn">
            Movie not found
          </h1>
        </div>
      )}

      {showMovieSearch && !showLoading && (
        <MovieSearch
          name={movie}
          showMovieDetails={showMovieDetails}
          history={history}
          viewMovie={viewMovie}
          idMovie={idMovie}
          addToMyList={addToMyList}
          myList={myList}
          movieid={movie}
        />
      )}

      {showHistory && history.length > 0 && <History history={history} />}
      {showMyList && <MyList myList={myList} />}

      {showLoading && <Loading />}
    </div>
  );
}

export default App;
