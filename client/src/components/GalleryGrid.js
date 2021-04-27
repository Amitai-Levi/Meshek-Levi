import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import HomeCard from "./HomeCard";

// import logoPic from ".../images/logo.jpg";
// import slogan from ".../images/slogan.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "-100px",
    marginLeft: "10px",
    marginRight: "10px",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
  },
}));

export default function GalleryGrid() {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <HomeCard key={2} isPic={true} Value="/logo192.png"></HomeCard>
      <HomeCard key={1} isPic={true} Value="/images/logo.jpg"></HomeCard>
      <HomeCard key={3} isPic={true} Value="/images/lobby.jpg"></HomeCard>
      <HomeCard key={4} isPic={true} Value="/images/sdf.jpg"></HomeCard>
      <HomeCard key={5} isPic={true} Value="/images/slogan.jpg"></HomeCard>
      <HomeCard key={6} isPic={true} Value="/images/slogan1.jpg"></HomeCard>
    </div>
  );
}
