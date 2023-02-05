import styles from "./History.module.css";
import * as React from "react";
import "animate.css";

const History = ({ history }) => {
  return (
    <div className={styles.history}>
      {history.map((x) => (
        <div key={x.id} className="animate__animated animate__fadeInDownBig">
          <div className={styles.historyline}>
            <img src={x.poster} alt="" width="100px" />
            <div className={styles.historydeteils}>
              <span className={styles.title}>{x.name}</span>
              <span className={styles.year}>{x.year}</span>
            </div>
          </div>
          <hr className="solid" />
        </div>
      ))}
    </div>
  );
};

export default History;
