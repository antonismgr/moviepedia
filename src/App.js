import "./App.css";
import React, { useState, useEffect } from "react";
import MovieSearch from "../src/components/MovieSearch";
import useFetch from "../src/services/useFetch";
import styles from "./App.module.css";
import History from "../src/components/History";
import MyList from "../src/components/MyList";
import GetMovieDetails from "../src/services/GetMovieDetails";

import Search from "../src/components/Search";
import { GetMovieDetails1 } from "../src/services/GetMovieDetails1";
// import ListMovieDetails from "../src/components/ListMovieDetails";

function App() {
  const [moviename, setMovieName] = useState("");
  const [tempMovie, setTempMovie] = useState("");
  const [idMovie, setidMovie] = useState("tt0499549");
  const [history, setHistory] = useState([]);
  const [myList, setMyList] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showMovieSearch, setShowMovieSearch] = useState(true);
  const [showMyList, setShowMyList] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  // const [showListMovieDetails, setShowListMovieDetails] = useState(false);

  const search = () => {
    setMovieName(tempMovie);
    setShowMovieDetails(false);
    setShowMovieSearch(true);
    setShowHistory(false);
    setShowMyList(false);
    // setShowListMovieDetails(false);
  };

  // const service = () => {
  //   setIsLoading(true);
  //
  //   GetMovieDetails1(
  //     `https://www.omdbapi.com/?i=tt0499549&apikey=4335f9ff`
  //   ).then((data) => {
  //     setIsLoading(false);
  //   });
  // };
  const showhistory = () => {
    setShowHistory(true);
    setShowMovieSearch(false);
    setShowMyList(false);
    // setShowListMovieDetails(false);
  };

  const showmylist = () => {
    const sortedList = sortListByName(myList);
    setMyList(sortedList);
    setShowHistory(false);
    setShowMovieSearch(false);
    setShowMyList(true);
    // setShowListMovieDetails(false);
  };

  const viewMovie = (id, title, poster, year) => {
    setidMovie(id);
    setShowMovieDetails(true);
    setHistory([
      ...history,
      { name: title, poster: poster, id: id, year: year },
    ]);
    setShowHistory(false);
  };

  const showmoviefromlist = (id) => {
    setidMovie(id);
    setShowMyList(false);
    setShowMovieSearch(false);
    setShowHistory(false);
    // setShowListMovieDetails(true);
  };

  const addToMyList = (title, poster, id, year) =>
    setMyList([...myList, { name: title, poster: poster, id: id, year: year }]);

  const { movie } = useFetch(
    `http://www.omdbapi.com/?s=${moviename}&apikey=4335f9ff`
  );

  const { movieid } = GetMovieDetails(
    `https://www.omdbapi.com/?i=${idMovie}&apikey=4335f9ff`
  );

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

  return (
    <div className={styles.main}>
      <Search
        handleChange={handleChange}
        search={search}
        showhistory={showhistory}
        showmylist={showmylist}
      />

      {showMovieSearch && (
        <MovieSearch
          name={movie}
          showMovieDetails={showMovieDetails}
          history={history}
          viewMovie={viewMovie}
          idMovie={idMovie}
          addToMyList={addToMyList}
          myList={myList}
        />
      )}

      {showHistory && <History history={history} />}
      {showMyList && (
        <MyList myList={myList} showmoviefromlist={showmoviefromlist} />
      )}
      {/* {showListMovieDetails && <ListMovieDetails movie={movieid} />} */}
    </div>
  );
}

export default App;
