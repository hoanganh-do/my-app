import React from "react";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import WorkIcon from '@material-ui/icons/Work';

import "./Timeline.css";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dot: {
    borderColor: "#ffc50c",
    fontSize: "2px",
    // padding: '3px',
  },
  // dott: {
  //   borderColor: '#ffc50c',
  //   alignSelf: 'center',
  //   marginLeft: '11px'
  // },

  connector: {
    width: "2px",
    height: "11px",
    // backgroundColor: '#a5a3a3',
    backgroundColor: "bisque",
  },
}));

const CustomTimeline = ({ title, icon, children }) => {
  const classes = useStyles();

  return (
    // Header Item
    /* <TimelineContent>
        <Typography variant="h6" className={"timeline_header"}>
          {title}
        </Typography>
       </TimelineContent> */

    // {/* Remaining Items
    //  <TimelineItem>
    //    <CustomTimelineSeparator />
    //    <TimelineContent>hatrhgsata</TimelineContent>
    //  </TimelineItem> */}

    <Timeline style={{ width: "100%", padding: "0" }}>
      {/* Header Item */}
      <TimelineItem className="timeline_header">
        <TimelineSeparator>
          <TimelineDot>{icon}</TimelineDot>
          <TimelineConnector className={classes.connector} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" >{title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* Remaining Items */}
      {/* <TimelineItem> */}
      <CustomTimelineSeparator />
      <TimelineContent>
        <Typography variant="h6">{children}</Typography>
      </TimelineContent>
      {/* </TimelineItem> */}
      {/* <TimelineDot variant={'outlined'} className={classes.dott}></TimelineDot> */}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant={'outlined'} className={classes.dot}></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" >{children}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant={'outlined'} className={classes.dot}/>
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant={'outlined'} className={classes.dot}/>

        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  const classes = useStyles();

  return (
    <TimelineSeparator>
      <TimelineDot variant={"outlined"} className={classes.dot} />
      <TimelineConnector className={classes.connector} />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
