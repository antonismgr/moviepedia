import styles from "./History.module.css";
import * as React from "react";

const History = ({ history }) => {
  return (
    <div className={styles.history}>
      {history.map((x) => (
        <div>
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

    // <div className={styles.history}>
    //   {history.map((x) => (
    //     <div className={styles.showhistory}>
    //       <img src={x.poster} alt="" width="100px" />
    //       {x.name}
    //     </div>
    //   ))}
    // </div>
  );
};

export default History;
