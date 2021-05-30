import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Header from "./components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sideImage: {
    border: "1px solid red",
    width: "100%",
    height: "100%",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Header />
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/flowerimage.jpg`}
            className={classes.sideImage}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
