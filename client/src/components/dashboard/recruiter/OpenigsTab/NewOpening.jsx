import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Switch, Route, useHistory } from "react-router-dom";
import JobDetails from "./JobDetails";
import AcademicTest from "./AcademicTests";
import TechnicalTest from "./TechnicalTest";
import End from "./End";
import { Hidden } from "@material-ui/core";
// import Fade from "react-reveal/Fade";
import { useMutation } from "react-query";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Job Details", "Academic Test", "Technical Test", "End"];
}

export default function NewOpening() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useHistory();
  const steps = getSteps();
  const [jobDetails, setJobDetails] = useState({});
  const [quiz, setQuiz] = useState({});
  const [technicalDes, setTechnicalDes] = useState({ id: 0 });

  const { mutateAsync } = useMutation(async (payload) => {
    await axios.post("http://localhost:5000/jobs", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
  }, {});

  // eslint-disable-next-line
  const submitJob = () => {
    mutateAsync({
      ...jobDetails,
      quiz,
      technicalTest: technicalDes,
    });
  };

  const handleNext = () => {
    if (!activeStep) {
      history.push("/dashboard/user/new-opening/academic-test");
    } else if (activeStep == 1) {
      history.push("/dashboard/user/new-opening/technical-test");
    } else {
      history.push("/dashboard/user/new-opening/end");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep == 1) {
      history.push("/dashboard/user/new-opening/");
    } else if (activeStep == 2) {
      history.push("/dashboard/user/new-opening/academic-test");
    } else {
      history.push("/dashboard/user/new-opening/technical-test");
    }
  };

  return (
    <div className={classes.root}>
      <Hidden only="xs">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Hidden>
      <div>
        {/* Here to place the component */}
        <Switch>
          <Route
            exact
            path="/dashboard/user/new-opening/"
            component={() => (
              // <Fade left>
              <JobDetails setJobDetails={setJobDetails} />
              // </Fade>
            )}
          />
          <Route
            path="/dashboard/user/new-opening/academic-test"
            component={() => (
              // <Fade left>
              <AcademicTest setQuiz={setQuiz} />
              // </Fade>
            )}
          />
          <Route
            path="/dashboard/user/new-opening/technical-test"
            component={() => (
              // <Fade left>
              <TechnicalTest setTechnicalDes={setTechnicalDes} />
              // </Fade>
            )}
          />
          <Route
            path="/dashboard/user/new-opening/end"
            component={() => (
              // <Fade left>
              <End />
              // {/* </Fade> */}
            )}
          />
        </Switch>
        <div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
              disabled={activeStep == steps.length - 1}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
