import Button from "./Button";
import styles from "./Navigator.module.css";
import Stack from "@mui/material/Stack";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navigator = ({ showhistory, showmylist }) => {
  return (
    <div className={styles.navigator}>
      <Stack spacing={2} direction="row">
        <Button
          title="History"
          startIcon={<HistoryIcon />}
          action={showhistory}
          color="primary"
          variant="text"
          size="large"
        />
        <Button
          className={styles.buttons}
          title="Favourites"
          startIcon={<FavoriteIcon />}
          action={showmylist}
          color="error"
          variant="text"
          size="large"
        />
      </Stack>
    </div>
  );
};

export default Navigator;
