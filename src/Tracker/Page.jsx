import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();
  const [stockList, setStockList] = useState([]);
  const [stockName, setStockName] = useState("");
  console.log(stockName);
  return (
    <Grid container centered>
      <Grid item xs={0} sm={2}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={(e) => {
              setStockName(e.target.value);
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => {
              setStockList((newWordList) => [...newWordList, stockName]);
            }}
          >
            Save
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {stockList.map((word) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>{word}</div>
              {/* <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button> */}
            </div>
          ))}
        </div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
}
