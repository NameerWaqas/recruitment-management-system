import React from "react";
import Button from "@material-ui/core//Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles/preQuiz.styles";
import { useParams, useHistory } from "react-router";

export default function PreQuiz() {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const onContinue = () => {
    history.push(`/dashboard/user/quiz-start/${id}`, { id });
  };
  return (
    <>
      <Grid container>
        <Grid className={classes.leftSection} item md={4}>
          <h4>Middleware</h4>
          <p style={{ fontWeight: "lighter", fontSize: "200%" }}>
            Hey Nameer Waqas,
          </p>
          <h1 style={{ fontWeight: "bolder" }}>
            Welcome to Middleware Angular (Basic) Skills Certification Test
          </h1>
          <div className={classes.stats}>
            <section className={classes.testDuration}>
              <article>Test Duration</article>
              <article>60 minutes</article>
            </section>
            <section className={classes.totalQuestions}>
              <article>No. of questions</article>
              <article>2 questions</article>
            </section>
          </div>
        </Grid>
        <Grid item md={8} className={classes.rightHalf}>
          <h1 className={classes.instructions}>Instructions</h1>
          <ol className={classes.ol}>
            <li>
              This is a timed test. Please make sure you are not interrupted
              during the test, as the timer cannot be paused once started.
            </li>
            <li>Please ensure you have a stable internet connection.</li>
            <li>
              We recommend you to try the sample test for a couple of minutes,
              before taking the main test.
            </li>
          </ol>
          <Button
            className={classes.continueButton}
            variant="contained"
            onClick={onContinue}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
