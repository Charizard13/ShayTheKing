import React, { useState, useEffect } from "react";
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
import { setSnackbar } from "../redux/ducks/snackbar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
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

export default function EditKey() {
  const keyword = useSelector((state) => state.keyword);
  useEffect(() => {
    setNewWordList(keyword.words);
    setTitleName(keyword.title);
  }, [keyword]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [newWordList, setNewWordList] = useState("");
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

  const handleAdd = () => {
    setError("");
    let newKeyWord = {
      title: titleName,
      words: newWordList,
    };
    if (newKeyWord.title.length >= 2 && newKeyWord.words.length > 0) {
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
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
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

              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {titleName && titleName}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="KeyWord title"
            type="Title"
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
          {/* <DialogContentText
            id="alert-dialog-slide-description"
            style={{
              textAlign: "center",
            }}
          > */}
          <span
            style={{
              display: "flex",
              direction: "row",
              maxWidth: "20px",
            }}
          >
            {newWordList &&
              newWordList.map((element) => {
                return (
                  <>
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <DeleteIcon
                        onClick={() => {
                          setNewWordList(
                            newWordList.filter((word) => {
                              return word !== element;
                            })
                          );
                        }}
                      />
                    </IconButton>
                    <p>{element}</p>
                  </>
                );
              })}
          </span>
          {/* </DialogContentText> */}
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
