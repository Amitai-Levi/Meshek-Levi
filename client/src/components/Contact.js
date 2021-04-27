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
  ico: {
    width: "50px",
  },
}));
export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <img src="/images/contact.jpg" className={classes.title}></img>
      <iframe
        style={{ border: 0, width: "600", height: "450" }}
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkb_kaq27AhUR7vor3Hq8-Fw&key=AIzaSyBFquHjHhVVcR7U0KblL3b7h7FmtKuCMEo"
      ></iframe>
      <a href="https://waze.com/ul/hsv8tqbvpe">
        <img src="/images/waze.png" alt="waze" className={classes.ico} />
      </a>
      <a href="tel:0528477506">
        <img src="/images/phone-call.png" alt="call" className={classes.ico} />
      </a>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="שם מלא (אופציונלי)"
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="מס' טלפון או כתובת מייל להתקשרות (אופציונלי) "
        />
        <input
          type="text"
          name="headline"
          id="headline"
          placeholder="כותרת"
          required
        />
        <input
          type=""
          name="content"
          id="content"
          placeholder="תיאור"
          required
        />
      </form>
    </div>
  );
}
