import React from "react";
import styles from "./MyList.module.css";
import "animate.css";

const MyList = ({ myList }) => {
  return (
    <div className={styles.mylist}>
      {myList.map((x) => (
        <a
          href={
            "https://www.youtube.com/results?search_query=" +
            x.name +
            " trailer"
          }
          target="_blank"
          key={x.id}
          className="animate__animated animate__fadeIn"
        >
          <div className={styles.showmylist}>
            <span className={styles.name}>{x.name}</span>
            <img src={x.poster} alt="" width="200px" />
            <span className={styles.year}>{x.year}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default MyList;
