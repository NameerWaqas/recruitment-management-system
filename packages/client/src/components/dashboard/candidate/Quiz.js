import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Timer from "react-compound-timer";

const data = [
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
  {
    question: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    opt1: "option 1",
    opt2: "option 2",
    opt3: "option 3",
    opt4: "option 4",
  },
];

export default function QuizSection() {
  const classes = useStyles();

  const timerSection = (
    <Grid container>
      <Grid
        item
        md={12}
        style={{
          position: "fixed",
          top: "10vh",
          right: "10px",
          zIndex: "1",
        }}
      >
        <Timer initialTime={1000 * 60 * 12} direction="backward">
          {() => (
            <>
              <Typography
                variant="h3"
                style={{ paddingRight: "10px", color: "white" }}
              >
                <Timer.Minutes /> : <Timer.Seconds />
              </Typography>
            </>
          )}
        </Timer>
      </Grid>
    </Grid>
  );

  const QuestionCard = ({ question, opt1, opt2, opt3, opt4 }) => (
    // <Fade bottom>
    <Grid container justify="center">
      <Grid item md={11} className={classes.questionCard}>
        <Typography variant="h6">{question}</Typography>
        <RadioGroup name={question} onChange={() => {}}>
          <FormControlLabel
            value={opt1}
            control={<Radio style={{ color: "grey" }} />}
            label={opt1}
          />
          <FormControlLabel
            value={opt2}
            control={<Radio style={{ color: "grey" }} />}
            label={opt2}
          />
          <FormControlLabel
            value={opt3}
            control={<Radio style={{ color: "grey" }} />}
            label={opt3}
          />
          <FormControlLabel
            value={opt4}
            control={<Radio style={{ color: "grey" }} />}
            label={opt4}
          />
        </RadioGroup>
      </Grid>
    </Grid>
    // </Fade>
  );

  const questions = (
    <div style={{ marginTop: "10vh" }}>
      {data.map((x) => (
        <QuestionCard
          question={x?.question}
          opt1={x?.opt1}
          opt2={x?.opt2}
          opt3={x?.opt3}
          opt4={x?.opt4}
        />
      ))}
    </div>
  );

  return (
    <div style={{ width: "100%", backgroundColor: "#0a0b18" }}>
      {timerSection}
      {questions}
    </div>
  );
}

const useStyles = makeStyles({
  questionCard: {
    color: "white",
    backgroundColor: "#212529",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  },
});
