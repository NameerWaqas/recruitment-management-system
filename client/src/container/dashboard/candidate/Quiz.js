import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Timer from "react-compound-timer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getQuizById } from "../../../fetcher/quiz.fetch";

export default function QuizSection() {
  const classes = useStyles();
  const { id } = useParams();
  const { data } = useQuery([`job-${id}-quiz`, id], getQuizById);
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

  const QuestionCard = ({
    description,
    i,
    option1,
    option2,
    option3,
    option4,
  }) => (
    // <Fade bottom>
    <Grid container justify="center">
      <Grid item md={11} className={classes.questionCard}>
        <Typography variant="h6">
          Question {i + 1}: {description}
        </Typography>
        <RadioGroup name={description} onChange={() => {}}>
          <FormControlLabel
            value={option1}
            control={<Radio style={{ color: "grey" }} />}
            label={option1}
          />
          <FormControlLabel
            value={option2}
            control={<Radio style={{ color: "grey" }} />}
            label={option2}
          />
          <FormControlLabel
            value={option3}
            control={<Radio style={{ color: "grey" }} />}
            label={option3}
          />
          <FormControlLabel
            value={option4}
            control={<Radio style={{ color: "grey" }} />}
            label={option4}
          />
        </RadioGroup>
      </Grid>
    </Grid>
    // </Fade>
  );

  const questions = (
    <div style={{ marginTop: "10vh" }}>
      {data?.map((x, i) => (
        <QuestionCard
          description={x?.description}
          i={i}
          option1={x?.option1}
          option2={x?.option2}
          option3={x?.option3}
          option4={x?.option4}
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
