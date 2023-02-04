const ShowHistory = ({ history }) => {
  console.log(history);
  return (
    <div className="history">
      {history.map((x) => (
        <div className="showhistory">
          <img src={x.poster} alt="" width="100px" />
          <h3>{x.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShowHistory;
