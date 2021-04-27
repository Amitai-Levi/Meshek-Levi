import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Redirect } from "react-router-dom";

// import logoPic from ".../images/logo.jpg";1234

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    backgroundImage: `url("/images/logo.jpg")`,
    backgroundPosition: "center bottom",
    backgroundSize: "contain" /* <------ */,
    backgroundRepeat: "no-repeat",
    maxHeight: "100%",
    maxWidth: "100%",
    marginTop: "0px",
  },
}));

// const ChangeUrl = (path) => {
//   let history = useHistory();
//   history.push(path);
// };
export default function Header(currentPage = 0) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
          centered
        >
          <Tab label="דף הבית" {...a11yProps(0)} href="#top"></Tab>
          <Tab label="גלריה" {...a11yProps(1)} href="#gallery" />
          <Tab label="אודותינו" href="#about" {...a11yProps(2)} />
          <Tab label="צור קשר" {...a11yProps(3)} href="#contact" />
          <Tab className={classes.logo} href="#top" style={{ opacity: 1 }} />
        </Tabs>
      </AppBar>
    </div>
  );
}
