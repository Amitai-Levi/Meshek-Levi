import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeCardGrid from "./HomeCardGrid";
import GalleryGrid from "./GalleryGrid";

const useStyles = makeStyles((theme) => ({
  parag: {
    marginTop: "-100px",
    textAlign: "center",
    marginLeft: "100px",
    marginRight: "100px",
  },
  title: {
    marginTop: "-70px",
    bottom: "10em",
    fontSize: "70px",
    fontWeight: "bold",
    color: "white",
    marginLeft: "30vw",
    height: "auto",
    width: "auto",
  },
}));
export default function () {
  const classes = useStyles();

  return (
    <div>
      <img
        id="gallery"
        src="/images/gallery.jpg"
        className={classes.title}
      ></img>
      <div className={classes.parag}>
        <GalleryGrid />
      </div>
    </div>
  );
}
