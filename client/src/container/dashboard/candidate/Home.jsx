import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { useHistory } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";

import { getJobs } from "../../../fetcher/candidate.fetch";

function Home() {
  const { userData } = useSelector((state) => state.auth);
  const [showOpenings, setShowOpenings] = useState(true);

  const history = useHistory();
  const { data: openingsData } = useQuery([], getJobs);
  const header = (
    <Paper
      className="p-3 mb-3"
      style={{ backgroundColor: "#212529", color: "white" }}
    >
      <h4 className="my-0 py-0">
        <Typography variant="h5">Welcome back! {userData.username}</Typography>
      </h4>
    </Paper>
  );

  const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
      backgroundColor: "#212529",
      color: "white",
    },
    openings: {
      backgroundColor: "#0A0B18",
      color: "white",
    },
    chip: { margin: "3px", color: "#343a40", backgroundColor: "white" },
  }));

  const openingsSection = () => {
    const classes = useStyles();
    return (
      <Accordion expanded={showOpenings} className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setShowOpenings(!showOpenings)}
        >
          <Typography variant="h5">Current Openings</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={2}>
            {openingsData?.map((item, index) => {
              return (
                <Grid item md={4} key={index}>
                  <Card className={classes.openings}>
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <hr className="bg-white pt-0 mt-0" />
                      <Typography variant="p">{item.description}</Typography>
                      <hr className="bg-white" />
                      <Typography variant="p">
                        <b>Organization: {item.organization}</b>
                      </Typography>
                      <br />
                      <Typography variant="p">
                        <b>Position type: {item.job_type}</b>
                      </Typography>
                      <hr className="mb-2 bg-white" />
                      {/* {item.skills.map((skill, id) => { */}
                      {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Redux",
                        "Bootstrap",
                      ].map((skill, id) => {
                        return (
                          <Chip
                            label={skill}
                            key={id}
                            className={classes.chip}
                            onClick={() => {}}
                          />
                        );
                      })}
                      <hr className="mb-2 bg-white" />
                      <Button
                        onClick={() =>
                          history.push(`/dashboard/user/quiz/${item?._id}`)
                        }
                        style={{ backgroundColor: "white", color: "#023047" }}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <div style={{ padding: "10px", backgroundColor: "#0A0B18" }}>
      {header}
      <>{openingsSection()}</>
    </div>
  );
}
export default Home;
