import React from 'react';
import { Button } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  button: {
    color: 'yellow',
    height: '30px',
    minWidth: '20px',
    backgroundColor: 'lightgray'
  },
  
  
  ArrowDownwardIcon: {
      color: 'green',
      margin: theme.spacing(2),
      fontSize: 'large'
    },

    button_text: {
      textTransform: 'lowercase'
    }
  }),
);


const CustomButton= ({text, icon}) => {

  const classes = useStyles();

  return (
   <Button className={classes.button} 
     endIcon={icon ? (<div className={classes.ArrowDownwardIcon}>{icon}</div>): null}>
     <span className={classes.button_text}>{text}</span>
   </Button>
 ) 
}

export default CustomButton;