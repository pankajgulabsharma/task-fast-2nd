import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Header from "./components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // sideImage: {
  //   // border: "1px solid red",
  //   width: "100% !important",
  //   height: "100% !important",
  // },
  container: {
    // border: "1px solid red",
    width: "100vw",
    height: "100vh",
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

  card: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  media: {
    height: 715,
    border: "none",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
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
        <Grid item xs={12} sm={12} md={5} lg={5} className={classes.green}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={`${process.env.PUBLIC_URL}/assets/images/flowerimage.jpg`}
            />
          </Card>
          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/images/flowerimage.jpg`}
            className={classes.sideImage}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
