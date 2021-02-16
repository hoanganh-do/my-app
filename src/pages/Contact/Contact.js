import { Grid, Icon, Paper, Typography, TextField } from "@material-ui/core";
import React from "react";

import CustomButton from "../../components/Button/Button";

import resumeData from "../../utils/resumeData";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Contact

  contactInfo_item: {
    fontSize: "13px",
    color: "#787878",
    lineHeight: '9px'
  },

  span: {
    color: 'black',
    fontWeight: '500'
  },

  // contactInfo_container: {
  //   marginTop: "15px"
  // },

  contactInfo_icon: {
    // marginTop: "15px",
    marginRight: "3px",
    fontSize: '40.5px',
    color: 'lightblue'
  }

  // End of Contacts
}));

const Contact = () => {
    const classes = useStyles();

    return (
        
        //Contact
      <Grid container spacing={10} className="section pt_45 pb_45">
      {/* Contact form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 classname="section_title_text">Contact Form</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="Message"
                  label="Message"
                  multiline rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton text="Submit"></CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact information */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Information</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className={classes.contactInfo_item}>
                  <span className={classes.span}>Address:</span> {resumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography className={classes.contactInfo_item}>
                    <span className={classes.span}>Phone:</span> {resumeData.phone}
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                  <Typography className={classes.contactInfo_item}>
                    <span className={classes.span}>Email:</span> {resumeData.email}
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        

          <Grid item xs={12}>
            <Grid container className="">
              {Object.keys(resumeData.socials).map((key) => (
                <Grid item className="">
                  {/* <a href={resumeData.socials[key].link}></a> */}
                  <span className={classes.contactInfo_icon}>
                    {resumeData.socials[key].icon}
                  </span>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
 
   );
};


export default Contact;