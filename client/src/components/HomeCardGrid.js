import React from "react";
import PropTypes, { element } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import HomeCard from "./HomeCard";

// import logoPic from ".../images/logo.jpg";1234
// import slogan from ".../images/slogan.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
}));
export default function HomeCardGrid({ content }) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {content.map((element) => (
        <HomeCard
          key={element.id}
          isPic={element.isPic}
          Value={element.value}
        ></HomeCard>
      ))}
    </div>
  );
}
