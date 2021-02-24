import React, {useState} from 'react';
import {Grid, Tab, Tabs} from "@material-ui/core";


const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tab */}
      <Grid item>
        <Tabs
         value={tabValue} 
         indicatorColor='white' 
         className='custom_tabs' 
         onChange={(event, newValue) => setTabValue(newValue)}> 
          <Tab label='All' value='All' className={tabValue== 'All' ? 'customTabs_item active' : 'customTabs_item'} />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default Portfolio;


{/* Skills */}
{/* <Grid
container
spacing={3}
justify="space-between"
className="section_graybg pb_45 p_50">
{resumeData.skills.map((skill) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper className={classes.skill} elevation={0}>
      <Typography variant="h6" className={classes.skill_title}>
        {skill.title}
      </Typography>
      {skill.description.map((element) => (
        <Typography variant="body2" className={classes.skill_description}>
          <TimelineDot variant='outlined' className={classes.timeline_dot} />
          {element}
        </Typography>
      ))}

    </Paper>
  </Grid>
))}

</Grid> */}