import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import WorkIcon from '@material-ui/icons/Work';

// import './Timeline.css';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({


  dot: {
    borderColor: '#ffc50c',
    fontSize: 'small',
    padding: '3px',


  },

  connector: {
    width: '2px',
    backgroundColor: '#a5a3a3',
    height: '20px'

  }

}))

const CustomTimeline = ({ title, icon, children }) => {

  const classes = useStyles();

  return (




    /* <TimelineContent>
//       <Typography variant="h6" className={"timeline_header"}>
//       {title}
//       </Typography>
//       </TimelineContent> */

    // {/* Remaining Items
    //  <TimelineItem>
    //    <CustomTimelineSeparator />
    //    <TimelineContent>hatrhgsata</TimelineContent>
    //  </TimelineItem> */}

    <Timeline style={{ width: '50%' }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />

        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>

    </Timeline>
  );
};


// export const CustomTimelineSeparator = () => {

//   const classes = useStyles();

//   return (

//     <TimelineSeparator >
//       <TimelineDot variant={'outlined'} className={classes.dot} />
//       <TimelineConnector />
//     </TimelineSeparator>

// )};



export default CustomTimeline;