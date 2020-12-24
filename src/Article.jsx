import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#262927",
    },
  },
  font: {
    color: "black",
    [theme.breakpoints.up("sm")]: {
      color: "white",
    },
  },
}));

const Article = (props) => {
  const classes = useStyles();
  const { avatarSrc, date, link, content, title } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const newTitle = title.slice(0, 60) + "...";
  //   const newContent = content.slice(0, 40);

  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={avatarSrc}
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {newTitle}
          </Typography>
          {/* <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {newContent}
          </Typography> */}
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <div style={{ flex: 1 }}>
            {" "}
            <Typography className={classes.pos} color="textSecondary">
              {date}
            </Typography>
          </div>

          <Button size="small" color="primary" href={link} variant="contained">
            Go to site{" "}
          </Button>
        </CardActions>
      </CardActionArea>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography variant="h5" component="h2" paragraph>
            {title}
          </Typography> */}
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            paragraph
          >
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Article;
