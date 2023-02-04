import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Navigator from "./Navigator";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const Search = ({ handleChange, search, showhistory, showmylist }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchbar}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Movie"
            inputProps={{ "aria-label": "search movie" }}
            onChange={handleChange}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={search}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <Navigator showhistory={showhistory} showmylist={showmylist} />
      </div>
    </div>
  );
};

export default Search;
