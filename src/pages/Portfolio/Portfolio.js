import React, { useState } from "react";
import {
  Grid,
  Tab,
  Tabs,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Grow,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

import './Portfolio.css';

import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [ProjectDialog, setProjectDialog] = useState(false);

  // const ProjectDialog = () => (
  //   <Dialog open={ProjectDialog} onClose={() => setProjectDialog(false)}>
  //     <DialogTitle onClose={() => setProjectDialog(false)} >{ProjectDialog.title}
  //       <img src="" alt="" />
  //       <DialogContent>
  //         {ProjectDialog.description}
  //       </DialogContent>
  //       <DialogActions>
  //         {ProjectDialog?.links.map(link => (
  //           <a href={link.link} target='_blank'>{link.icon}</a>
  //         ))}
  //       </DialogActions>
  //     </DialogTitle>
  //   </Dialog>
  // )

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
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className=""
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={ProjectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {ProjectDialog.title}
          <img src="https://i.pinimg.com/originals/cb/c2/2c/cbc22ca5a3d7568a742262639a9f6b3f.jpg" alt="" />
          <DialogContent>
           {ProjectDialog.description}
          </DialogContent>
          <DialogActions>
            {ProjectDialog?.links?.map((link) => (
              <a href={link.link} target="_blank">
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </DialogTitle>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;

{
  /* Skills */
}
{
  /* <Grid
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

</Grid> */
}
