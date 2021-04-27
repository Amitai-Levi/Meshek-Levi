import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import lobby from ".../images/lobby.jpg";
// import slogan from ".../images/slogan1.jpg";
import HomeCard from "./HomeCard";
// import logoPic from ".../images/logo.jpg";1234
import HomeCardGrid from "./HomeCardGrid";
import Gallery from "./Gallery";
import Contact from "./Contact";

const printSizes = () => {
  const body = document.body,
    html = document.documentElement;

  console.log("body.scrollHeight =" + body.scrollHeight);
  console.log("body.offsetHeight =" + body.offsetHeight);
  console.log("body.clientHeight =" + body.clientHeight);
  console.log("html.scrollHeight =" + html.scrollHeight);
  console.log("html.offsetHeight =" + html.offsetHeight);
  console.log(
    "document.documentElement.scrollHeight =" +
      document.documentElement.scrollHeight
  );
  console.log("window.pageYOffset =" + window.pageYOffset);
};
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
}));
export default function Home({ content }) {
  const [loc, setLoc] = React.useState(0 - window.innerWidth);
  const body = document.body,
    html = document.documentElement;

  const height1 = document.body.offsetHeight;
  const scroll = () => {
    console.log("height = " + height1);
    const movingElement = document.getElementById("firstMoving");
    setLoc(window.pageYOffset * 2 - window.innerWidth + 400);
    // console.log(loc);
    //  movingElement.style.marginRight;
    if (loc < 0) {
      movingElement.style.marginLeft = loc + "px";
      // movingElement.innerText = loc;
    }
    if (window.pageYOffset > height1 - 1000) {
      const movingElement = document.getElementById("secondMoving");
      movingElement.style.marginRight =
        window.pageYOffset - height1 + 1000 - window.innerWidth + "px";
      movingElement.style.backgroundColor = "blue";
      console.log("height2 =" + height1);
    }
  };
  const classes = useStyles();
  window.addEventListener("scroll", scroll);

  return (
    <div>
      <div id="top" className={classes.square}>
        <div className={classes.title}></div>
      </div>

      <div
        id="firstMoving"
        style={{
          textAlign: "right",
          width: window.innerWidth,
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
      <Gallery></Gallery>
      <Contact></Contact>
      <div
        id="secondMoving"
        style={{
          textAlign: "left",
          backgroundColor: "red",

          width: window.innerWidth,
        }}
      >
        <div style={{ display: "inline-block", width: "150px" }}>
          The way she moves, she's like a belly-dancer. She's shaking that ass
          to the new Nelly jams. I think someone's at the door but I don't think
          I'mma answer. Police saying 'freeze!': do-doing, doing, doing. What do
          you mean, 'freeze'? Please, I'm a human being!. I have needs! I'm NOT
          done, not 'til I'm finished peeing.
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
    </div>
  );
}
