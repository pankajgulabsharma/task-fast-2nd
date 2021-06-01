import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sideImage: {
    border: "1px solid red",
    width: "42vw",
    height: "100vh",
    overflow: "hidden",
    // backgroundSize: "contain",
    // backgroundRepeat: "no-repeat",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundSize: "cover",
  },
  b: {
    border: "1px solid red",
  },
  title: {
    paddingBottom: "50px",
  },
  getStartedButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px 20px",
    borderRadius: 0,
    textTransform: "none",
  },
  tryforfreeButton: {
    textTransform: "none",
    paddingLeft: "20px",
    fontWeight: "bold",
  },
  bottomImageContainer: {
    // border: "1px solid red",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  bottomImg: {
    // border: "1px solid red",
    width: "100px",
    height: "100px",
    padding: "30px",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={7} lg={7} className={classes.b}>
          <Header />
          <Container maxWidth="sm">
            <Typography variant="h1" className={classes.title}>
              People who care about your growth
            </Typography>
            <Button className={classes.getStartedButton}>Get started</Button>
            <Button className={classes.tryforfreeButton}>
              Try platform for free
            </Button>
            <Grid container>
              <Grid item className={classes.bottomImageContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/flowerimage.jpg`}
                  className={classes.bottomImg}
                />
              </Grid>
            </Grid>
          </Container>
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
