import React from "react";
import { Grid } from "@material-ui/core";
import AddKey from "./AddKey";
import EditKey from "./EditKey";
import List from "./List";
import Content from "./Content";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

export default function App() {
  return (
    <Grid container>
      <Grid item xs={0} sm={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
          style={{ marginTop: "12px" }}
        >
          <Grid item justify="center" alignItems="center">
            <AddKey />
          </Grid>
          <Grid item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton color="secondary" aria-label="add to shopping cart">
                <Delete />
              </IconButton>
              <IconButton color="primary" aria-label="edit key list">
                <EditKey child={"child"} />
              </IconButton>
            </div>

            <List />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Content />
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
}
