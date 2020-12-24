import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentKey } from "../redux/ducks/keywords";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const dispatch = useDispatch();
  const keywordList = useSelector((state) => state.keywordsList);
  const keyword = useSelector((state) => state.keyword);
  const classes = useStyles();
  const [title, setTitle] = useState("");

  const handleChange = async (event) => {
    setTitle(event.target.value);
    let result = keywordList.filter((keyList) => {
      return keyList.title === event.target.value;
    });
    result = result[0];
    console.log(result);
    await dispatch(setCurrentKey(result.title, result.words));
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-title-native"
            select="true"
            label=" KeyWord List"
            value={title}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your title"
            variant="outlined"
          >
            {keywordList.map((option) => (
              <option key={option.title} value={option.title}>
                {option.title}
              </option>
            ))}
          </TextField>
        </div>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {keyword.words.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </div>
    </>
  );
}
