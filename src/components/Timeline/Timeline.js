import React from 'react';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import WorkIcon from '@material-ui/icons/Work';

// import './Timeline.css';

import { makeStyles }from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  
  dot: {
    borderColor: '#ffc50c',
    fontSize: 'small',
    padding: '3px'
  }

}))

const CustomTimeline = ({title, icon, children}) => {
  // const title= props;

  return (
    <Timeline > 
      {/* Item Header */}
      <TimelineItem >
         <TimelineSeparator>
          <TimelineDot >{icon}</TimelineDot> 
          <TimelineConnector />
        </TimelineSeparator>

        {/* <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
          {title}
          </Typography>
          </TimelineContent> */}

          <Typography variant="h6">{children}</Typography> 
      </TimelineItem>

      
      

      {/* Remaining Items */}
      {/* <TimelineItem>
        <CustomTimelineSeperator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}
    </Timeline>
    
  );
};


export const CustomTimelineSeperator = () => {
  
  const classes = useStyles();

  return (

    <TimelineSeparator className={"seperator_padding"}>
      <TimelineDot variant={'outlined'} className={classes.dot} />
      <TimelineConnector />
    </TimelineSeparator>

)};



export default CustomTimeline;