import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import logoPic from ".../images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundImage: `url("/images/logo.jpg")`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover" /* <------ */,
    backgroundRepeat: "no-repeat",
    width: "30px",
    height: "30px",
    zIndex: "+50",
    float: "right",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <div>
      <h1>NotFound</h1>;<div className={classes.logo}></div>
    </div>
  );
}
