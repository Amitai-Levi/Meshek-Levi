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
    marginLeft: "10px",
  },
  form: {
    alignSelf: "center",
    width: "40%",
    backgroundColor: "white",
  },
}));
export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <img
        id="contact"
        src="/images/contact.jpg"
        className={classes.title}
      ></img>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div style={{ textAlign: "center" }}>
          <p>:איפה אנחנו נמצאים</p>
          <iframe
            style={{ border: 0, width: "600", height: "450" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJkb_kaq27AhUR7vor3Hq8-Fw&key=AIzaSyBFquHjHhVVcR7U0KblL3b7h7FmtKuCMEo"
          ></iframe>
          <p>לניווט עם וויז לחצו על האייקון או כתבו בשורת הניווט </p>
          <p>"משק לוי בית גמליאל"</p>
          <a href="https://waze.com/ul/hsv8tqbvpe">
            <img src="/images/waze.png" alt="waze" className={classes.ico} />
          </a>
        </div>
        <div
          style={{
            // display: "grid",
            // gridTemplateColumns: "1fr 1fr 1fr 1fr",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <p>:דרכים ליצור איתנו קשר</p>
          <a href="tel:0528477506">
            <img
              src="/images/phone-call.png"
              alt="call"
              className={classes.ico}
            />
          </a>
          <a href="https://www.facebook.com/Levisfarm/">
            <img
              src="/images/facebook.png"
              alt="facebook"
              className={classes.ico}
            />
          </a>
          <a href="https://instagram.com/the_levis_farm?igshid=u2manjz4mx3l">
            <img
              src="/images/instagram.jpg"
              alt="instagram"
              className={classes.ico}
            />
          </a>
          <a href="//wa.me/0528477506">
            <img
              src="/images/whatsapp.png"
              alt="call"
              className={classes.ico}
            />
          </a>
        </div>
        <div
          style={{
            // display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p>!רוצים להגיד לנו משהו? לכו על זה</p>
          <form
            className={classes.form}
            action=""
            style={{
              backgroundColor: "inherit",
              justifySelf: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <label htmlFor="name"> שם מלא (אופציונלי)</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="comm">
              מס' טלפון או כתובת מייל להתקשרות (אופציונלי)
            </label>
            <input type="text" name="comm" id="comm" />
            <label htmlFor="headline">כותרת</label>
            <input type="text" name="headline" id="headline" required />
            <label htmlFor="content">תיאור</label>
            <input type="text" name="content" id="content" required />
            <button type="submit">!שלח</button>
          </form>
        </div>
      </div>
    </div>
  );
}
