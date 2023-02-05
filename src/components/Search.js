import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Navigator from "./Navigator";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import logo from "../logo/logo.png";

const Search = ({ handleChange, search, showhistory, showmylist, home }) => {
  return (
    <div className={styles.search}>
      <div className={styles.searchbar}>
        <div className={styles.searchbarchild}>
          <div className={styles.logo}>
            <img src={logo} onClick={() => home()} />
          </div>
        </div>
        <div className={styles.searchbarchild}>
          <div className={styles.input}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
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
          </div>
        </div>
        <div className={styles.searchbarchild}>
          <Navigator showhistory={showhistory} showmylist={showmylist} />
        </div>
      </div>
    </div>
  );
};

export default Search;
