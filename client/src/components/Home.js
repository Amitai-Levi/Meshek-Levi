import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
// import lobby from ".../images/lobby.jpg";
// import slogan from ".../images/slogan1.jpg";
import HomeCard from "./HomeCard";
// import logoPic from ".../images/logo.jpg";1234
import HomeCardGrid from "./HomeCardGrid";
import Gallery from "./Gallery";
import MiniGallery from "./MiniGallery";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  square: {
    display: "flex",
    width: "100%",
    height: "100vh",
    // backgroundImage: `url(${lobby})`,
    backgroundImage: `url("/images/lobby.jpg")`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover" /* <------ */,
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "100px",
    bottom: "10em",
    fontSize: "70px",
    fontWeight: "bold",
    color: "white",
    backgroundImage: `url("/images/slogan1.jpg")`,
    // backgroundPosition: "center",
    // backgroundSize: "cover" /* <------ */,
    backgroundRepeat: "no-repeat",
    marginLeft: "30vw",
    width: "100%",
    height: "100%",
  },
  movingObject: {
    marginLeft: -window.innerWidth,
  },
  movingObject2: {
    marginLeft: window.innerWidth,
  },
}));
export default function Home({ content }) {
  const windowWidth = window.innerWidth;
  const classes = useStyles();
  let fromScroll = false,
    firstTime = true,
    secondFirstTime = true;
  function scrollEvent(flag = false) {
    fromScroll = flag.isTrusted;
    if (fromScroll && window.pageYOffset >= 200) {
      if (
        secondFirstTime &&
        document.documentElement.scrollHeight - window.pageYOffset <= 1300
      ) {
        const second = document.getElementById("secondMoving");
        second.style.transition = "margin 5s ease-in-out";
        second.style.marginLeft = "0px";
        secondFirstTime = false;
      } else if (firstTime) {
        const first = document.getElementById("firstMoving");
        first.style.transition = "margin 2s ease-in-out";
        first.style.marginLeft = "0px";
        firstTime = false;
      }
      document.removeEventListener("scroll", scrollEvent());
    }
  }
  document.addEventListener("scroll", scrollEvent);

  return (
    <div>
      <div id="top" className={classes.square}>
        <div className={classes.title}></div>
      </div>

      <div
        className={classes.movingObject}
        id="firstMoving"
        style={{
          textAlign: "right",
          width: windowWidth,
        }}
      >
        <div
          id="about"
          style={{
            backgroundPosition: "center",
            backgroundImage: `url("/images/about.jpg")`,
            display: "inline-block",
            width: "550px",
            height: "200px",
            marginRight: "50px",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img
            src="/images/about.jpg"
            className={classes.title}
            style={{ backgroundPosition: "center" }}
          ></img> */}
        </div>
        <div
          style={{
            backgroundImage: `url("/images/tractor.png")`,
            backgroundSize: "contain" /* <------ */,
            display: "inline-block",
            width: "200px",
            height: "200px",

            right: "0",
          }}
        ></div>
      </div>
      <HomeCardGrid style={{ backgroundColor: "steelblue" }} content={content}>
        {/* <HomeCard isPic="true" value={logoPic}></HomeCard>
        <HomeCard isPic="true" value={logoPic}></HomeCard>
        <HomeCard isPic="true" value={logoPic}></HomeCard>
        <HomeCard isPic="true" value={logoPic}></HomeCard>
        <HomeCard isPic="true" value={logoPic}></HomeCard>
      <HomeCard isPic="true" value={logoPic}></HomeCard> */}
      </HomeCardGrid>
      <MiniGallery id="miniGallery"></MiniGallery>
      <a href="/Gallery">לעוד תמונות ואלבומים</a>

      <Contact></Contact>
      <div
        className={classes.movingObject2}
        id="secondMoving"
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "left",

          width: window.innerWidth,
        }}
      >
        <div
          style={{
            backgroundImage: `url("/images/tractor.png")`,
            backgroundSize: "contain" /* <------ */,
            transform: "rotateY(180deg)",
            display: "inline-block",
            width: "200px",
            height: "200px",

            right: "0",
          }}
        ></div>
        <div
          style={{
            display: "inline-block",
            width: window.innerWidth - 200 + "px",
            height: "70px",
            fontSize: "50px",
          }}
        >
          !כבר הגעתם לסוף ועוד לא הספיק לכם? תגיעו אלינו
        </div>
      </div>
    </div>
  );
}
