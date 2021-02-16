import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  LinkedIn,
} from "@material-ui/icons";

import { link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";

// import './Header.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: "30px",
    backgroundColor: "#fff",
    padding: "0 22px 0 0",
    borderRadius: "8px",
    boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07)",
  },

  header_home: {
    backgroundColor: "orange",
    padding: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "inherit",
    borderBottomLeftRadius: "inherit",
  },

  header_right: {
    display: "flex",
    alignItems: "center",
  },

  header_left: {
    marginRight: "auto",
  },

  resume: {
    fontSize: "16px",
    marginBottom: "-5px",
  },

  homeRounded: {
    color: "black",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Navbar expand="lg" sticky="top" className={classes.header}>
      <NavLink to="/">
        <Navbar.Brand className={classes.header_home}>
          <HomeRounded className={classes.homeRounded} />
        </Navbar.Brand>
      </NavLink>

      <Nav className={classes.header_left}>
        <NavLink to="/resume" className="">
          Resume Link
        </NavLink>

        <NavLink to="/portfolio" className="">
          Portfolio Link
        </NavLink>

        <NavLink to="/contact" className="">
          Contact Link
        </NavLink>
      </Nav>

      
    {/* <NavLink as="a" href="/">
        <Navbar.Brand className={classes.header_home}>
          <HomeRounded className={classes.homeRounded} />
        </Navbar.Brand>
      </NavLink> */}
        

      {/* <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
          
          <Nav.Link
          as= {Nav.Link}
          to="/"
          // className={pathName== "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
          as= {Nav.Link}
          to="/portfolio"
          // className={pathName== "/portfolio" ? "header_link_active" : "header_link"}
          >
            Portfolio
          </Nav.Link>

          </Nav>
        </Navbar.Collapse> */}

      <div className={classes.header_right}>
        {Object.keys(resumeData.socials).map((key) => (
          <a href={resumeData.socials[key].link} target="blank">
            {resumeData.socials[key].icon}
          </a>
        ))}
      </div>
    </Navbar>
  );
};

export default Header;
