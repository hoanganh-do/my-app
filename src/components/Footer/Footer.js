import {Typography} from '@material-ui/core';
import React from 'react';
import resumeData from "../../utils/resumeData";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'orange',
    color: "#eee",
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'sapce-between',
    minHeight: '70px',
    borderRadius: '8px',
    padding: '20px 25px'
  },
  

  footer_copyright: {
    fontSize: 'small',
    textAlign: 'end',
    color: 'grey'
  },

  a1: {
    textDecoration: 'none',
    color: 'lightblue'
  },

  footer_right: {
    marginLeft: 'auto'
  }

 }
));

const Footer = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footer_left}>
        <Typography className="footer_name">
          {resumeData.name}
        </Typography>
      </div>  
      <div className={classes.footer_right}>
        <Typography className={classes.footer_copyright}>
          Designed and Developed by {""}
          <a className={classes.a1} href="/" target="blank">
            111
          </a>
          <br />
          Clone idea from {""}
          <a href="https://themeforest.net/user/tavonline" target="blank">
            222
          </a>
        </Typography>

      </div>
      
    </div>
  );
};

export default Footer;