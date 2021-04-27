import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import logoPic from ".../images/logo.jpg";1234

const useStyles = makeStyles((theme) => ({
  picCard: {
    display: "inline-box",
    // backgroundImage: `url(${logoPic})`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover" /* <------ */,
    backgroundRepeat: "no-repeat",
    maxHeight: "80%",
    maxWidth: "80%",
    backgroundColor: "steelblue",
    padding: "15px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
  },
  infCard: {
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    textAlign: "center",
    padding: "50px",
  },
}));

export default function HomeCard({ id, isPic = false, Value = "wert" }) {
  const classes = useStyles();

  if (isPic) {
    return (
      <img
        style={{ marginLeft: "auto", marginRight: "auto" }}
        src={Value}
        key={id}
        className={classes.picCard}
      />
    );
  }
  return <div className={classes.infCard}>{Value}</div>;
}
