import React from "react";
import Article from "../Article.jsx";
import { Grid } from "@material-ui/core";

const data = require("../Data/data4.json");
const sortedData = data.slice(0, 9);

const Content = () => {
  return (
    <Grid container direction="column">
      <Grid container spacing={4}>
        {sortedData.map((article, i) => {
          return (
            <Grid item xs={12} md={4} sm={6}>
              <Article
                key={article.title}
                title={article.title}
                link={article.link}
                date={article.date}
                content={article.content}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Content;
