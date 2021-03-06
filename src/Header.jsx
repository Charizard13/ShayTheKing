import {
  AppBar,
  Typography,
  Toolbar,
  Switch,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { makeStyles, fade } from "@material-ui/core/styles";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    flex: 4,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  const [selectedTabs, setSelectedTabs] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTabs(newValue);
  };

  const { history, setDarkMode, darkMode } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => {
              setAnchorEl(null);
            }}
          >
            <MenuItem
              onClick={() => {
                handleMenuClick("/main/keys");
              }}
            >
              keys{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClick("/main/tracker");
              }}
            >
              Tracker{" "}
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClick("/");
              }}
            >
              Account Settings{" "}
            </MenuItem>
          </Menu>
        </div>
        <Typography>FinQuity</Typography>
        <Tabs
          value={selectedTabs}
          onChange={handleChange}
          // className={classes.textStyle}
          // centered
          indicatorColor="secondary"
        >
          <Tab
            label="Keys"
            onClick={() => {
              handleMenuClick("/main/keys");
            }}
          />

          <Tab
            label="Tracker"
            onClick={() => {
              handleMenuClick("/main/tracker");
            }}
          />
        </Tabs>
        <div className={classes.textStyle}></div>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Switch
          checked={darkMode}
          onChange={() => {
            setDarkMode(!darkMode);
          }}
        ></Switch>
        <AccountBalanceIcon />
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
