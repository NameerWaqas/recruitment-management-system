import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import JobDetails from "./JobDetails";
import AcademicTest from "./AcademicTests";
import TechnicalTest from "./TechnicalTest";
import End from "./End";
import { Hidden } from "@material-ui/core";
import { useMutation } from "react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { toggleSubmit } from "../../../../redux/reducers/newOpening";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#0A0B18",
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
  const { submitNewOpening, jobDetails, academicDetails, technicalDetails } =
    useSelector((state) => state.newOpening);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const { mutateAsync } = useMutation(
    async (payload) => {
      console.log("payload :>> ", payload);
      await axios.post("http://localhost:3000/jobs", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
    },
    {
      onSuccess: (data) => {
        history.push("/dashboard/user/");
      },
    }
  );
  useEffect(() => {
    if (submitNewOpening) {
      mutateAsync({
        ...jobDetails,
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Bootstrap"],
        academic_test: academicDetails,
        technical_test: technicalDetails,
      });
      dispatch(toggleSubmit());
    }
  }, [submitNewOpening]);

  const getActiveForm = () => {
    switch (activeStep) {
      case 0:
        return <JobDetails />;
        break;
      case 1:
        return <AcademicTest />;
        break;
      case 2:
        return <TechnicalTest />;
      case 3:
        return <End />;
    }
  };

  return (
    <div className={classes.root}>
      <Hidden only="xs">
        <Stepper activeStep={activeStep} style={{ backgroundColor: "#0A0B18" }}>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <p style={{ margin: 0, color: "white" }}>{label}</p>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Hidden>
      <div>
        {/* Here to place the component */}
        {getActiveForm()}
        <div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => prev - 1)}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setActiveStep((prev) => prev + 1)}
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
