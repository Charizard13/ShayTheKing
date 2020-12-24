import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addKey } from "../redux/ducks/keywords";
import { setSnackbar } from "../redux/ducks/snackbar";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function KeyWordModal() {
  const currentUserEmail = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [newWordList, setNewWordList] = useState([]);
  const [titleName, setTitleName] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async () => {
    setError("");
    let newKeyWord = {
      title: titleName,
      words: newWordList,
      email: currentUserEmail,
    };
    if (newKeyWord.title.length >= 2 && newKeyWord.words.length > 0) {
      dispatch(addKey(newKeyWord));
      dispatch(
        setSnackbar(
          true,
          "success",
          "Your New Keywords list has been submitted!"
        )
      );
      setOpen(false);
    } else {
      setError(
        "KeyWords list title must have more than 2 letters and minimum of 2 words"
      );
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add KeyWord
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ textAlign: "center" }}
        >
          {"Keywords Helper"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              textAlign: "center",
              color: "rgb(63,81,181)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {titleName && titleName}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Keywords list title"
            type="title"
            onChange={(e) => {
              setTitleName(e.currentTarget.value);
            }}
            required
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="new-word"
            label="New key"
            type="text"
            onChange={(e) => {
              setWord(e.currentTarget.value);
            }}
            fullWidth
          />
          <Button
            onClick={() => {
              setError("");

              if (newWordList.includes(word) || newWordList.length >= 10) {
                setError(
                  "List cannot have more than 10 words or same word twice"
                );
              } else {
                setNewWordList((newWordList) => [...newWordList, word]);
              }
            }}
            color="primary"
          >
            Add
          </Button>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              textAlign: "center",
            }}
          >
            {newWordList &&
              newWordList.map((element) => {
                return `${element} , `;
              })}
          </DialogContentText>
          {error && (
            <div className={classes.root}>
              <Alert severity="info">{error}</Alert>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
