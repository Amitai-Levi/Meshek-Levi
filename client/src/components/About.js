import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

export default function About() {
  const classes = useStyles();
  return (
    <>
      <img src="/images/about.jpg" className={classes.title}></img>

      <div className={classes.parag}>
        <p>
          Mom, I know I let you down. And though you say the days are happy. Why
          is the power off and I'm fucked up?. And, Mom, I know he's not around.
          But don't you place the blame on me. As you pour yourself another
          drink, yeah. I guess we are who we are. Headlights shining in the dark
          night, I drive on. Maybe we took this too far.
        </p>
        <p>
          I’m the American Dream. I’m the definiton of white trash ballin’. I’m
          right back on 'em. With a (chicka chicka chicka) I can’t call it. Same
          shit, different toilet. Oh, you got a nice ass, darling. Can’t wait to
          get you into my Benz, take you for a spin. What you mean we ain't
          fuckin’? You take me for a friend?. Let me tell you the whole story of
          Shady’s origin.
        </p>
      </div>
    </>
  );
}
