import React from "react";
import { Button, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  image: {
    width: "150px",
    height: "50px",
    backgroundColor: "#fff",
  },
  button: {
    color: "#000",
    // border: "1px solid red",
    textTransform: "none",
    fontWeight: "bold",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/spark.png`}
        className={classes.image}
      />
      <Button className={classes.button}>Sign up</Button>
    </Toolbar>
  );
}

export default Header;
