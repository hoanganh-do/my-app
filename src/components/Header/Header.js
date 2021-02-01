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

import {link, NavLink, withRouter} from 'react-router-dom';
import resumeData from '../../utils/resumeData';

import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home Link */}
      {/* <Nav.link as={NavLink} to="/"> */}
        <Navbar.Brand className="'header_home">
          <HomeRounded />
        </Navbar.Brand>
      {/* </Nav.link> */}

      <Navbar.Brand >
          <p className= "resume">Resume</p>
        </Navbar.Brand>
      

      {/* <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          
          <Nav.Link
          as= {Nav.Link}
          to="/"
          className={pathName== "/" ? "header_link_active" : "header_link"}>
            Resume
          </Nav.Link>


          <Nav.Link
          as= {Nav.Link}
          to="/portfolio"
          className={pathName== "/portfolio" ? "header_link_active" : "header_link"}>
            Portfolio
          </Nav.Link>

        </Nav>
        
      </Navbar.Collapse> */}

      <div className="header_right">
        {Object.keys(resumeData.socials).map((key) => (
          <a href={resumeData.socials[key].link} target="blank">
            {resumeData.socials[key].icon}
          </a> 
        ))};
      </div>

    </Navbar>
  );
};

export default Header;
