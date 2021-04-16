import React from "react";
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
            component={JobDetails}
          />
          <Route
            path="/dashboard/user/new-opening/academic-test"
            component={AcademicTest}
          />
          <Route
            path="/dashboard/user/new-opening/technical-test"
            component={TechnicalTest}
          />
          <Route path="/dashboard/user/new-opening/end" component={End} />
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
