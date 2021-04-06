import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";

function Home() {
  const { userData } = useSelector((state) => state.auth);
  const openingsData = [
    {
      title: "DB Administrator",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "VentureDive",
      type: "Internship",
      skills: ["SQL", "MySQL", "Oracle", "RDBMS"],
    },
    {
      title: "Software Engineer",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "10Pearls",
      type: "Full time",
      skills: ["Python", "Django", "REST", "Django REST", "GraphQL"],
    },
    {
      title: "Backend Engineer",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "Folio3",
      type: "Internship",
      skills: ["JavaScript", "NodeJS", "Express", "REST API"],
    },
    {
      title: "Project Manager",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "Afiniti",
      type: "Remote",
      skills: [
        "Agile",
        "Team Management",
        "Scrum",
        "Selinium",
        "Waterfall model",
        "SQA",
        "Unit testing",
      ],
    },
    {
      title: "Front-End Developer",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "Contour",
      type: "Internship",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Bootstrap"],
    },
    {
      title: "Graphic Designer",
      description:
        "Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.Dolore non do incididunt culpa do.",
      company: "",
      type: "Contract",
      skills: ["Adobe XD", "Adobe PS3", "Zeplin", "Wireframes", "UI", "UX"],
    },
  ];

  const header = (
    <Paper className="p-3 mb-3">
      <h4 className="my-0 py-0">
        <Typography variant="h5">Welcome back! {userData.username}</Typography>
      </h4>
    </Paper>
  );

  const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
    },
    openings: {
      backgroundColor: "#023047",
      color: "white",
    },
    chip: { margin: "3px", color: "#023047" },
  }));
  const openigsSection = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Current Openings</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={2}>
              {openingsData.map((item, index) => {
                return (
                  <Grid item md={4} key={index}>
                    <Card className={classes.openings}>
                      <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                        <hr className="bg-white pt-0 mt-0" />
                        <Typography variant="p">{item.description}</Typography>
                        <hr className="bg-white" />
                        <Typography variant="p">
                          <b>Organization: {item.company}</b>
                        </Typography>
                        <br />
                        <Typography variant="p">
                          <b>Position type: {item.type}</b>
                        </Typography>
                        <hr className="mb-2 bg-white" />
                        {item.skills.map((skill, id) => {
                          return (
                            <Chip
                              label={skill}
                              key={id}
                              className={classes.chip}
                            />
                          );
                        })}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  return (
    <>
      {header}
      {openigsSection()}
    </>
  );
}
export default Home;
