import React, { useState, useCallback, useEffect } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateAcademicDetails } from "../../../../redux/reducers/newOpening";

const useStyles = makeStyles(() => ({
  question: {
    marginBottom: "10px",
  },
  options: {
    margin: 0,
    marginLeft: "1%",
  },
  questionBox: {
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    margin: "1%",
    color: "#184e77",
    padding: "1%",
    marginLeft: 0,
  },
}));

function AcademicTest({ setQuiz }) {
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);
  const classes = useStyles();

  const setQuestion = (question) => {
    setQuestions(() => [...questions, question]);
    dispatch(updateAcademicDetails({ AD: question }));
  };

  useCallback(() => {
    setQuiz({ questions });
  }, [questions]);

  return (
    <div
      className="bg-white pl-4"
      style={{
        minHeight: "60vh",
      }}
    >
      <QuizCreator getQuestion={(e) => setQuestion(e)} />
      {questions.map((question, index) => (
        <div key={index} className={classes.questionBox}>
          <p className={classes.question}>
            Question {index + 1}: {question.description}
          </p>
          <p className={classes.options}>
            {"a) "}
            {question.option1}
          </p>
          <p className={classes.options}>
            {"b) "}
            {question.option2}
          </p>
          <p className={classes.options}>
            {"c) "}
            {question.option3}
          </p>
          <p className={classes.options}>
            {"d) "}
            {question.option4}
          </p>
        </div>
      ))}
    </div>
  );
}

const QuizCreator = ({ getQuestion }) => {
  const [isCreatingQuestion, setCreateQuestion] = useState(false);
  const [description, setDescription] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const addQuestion = () => {
    getQuestion({ description, option1, option2, option3, option4 });
    setCreateQuestion(false);
  };

  const QuizFields = (
    <>
      <Grid item md={8}>
        <TextField
          label="Question description"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Grid>
      <Grid item md={8}>
        <TextField
          type="text"
          variant="outlined"
          label="Option 1"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => setOption1(e.target.value)}
        />
      </Grid>
      <Grid item md={8}>
        <TextField
          type="text"
          variant="outlined"
          label="Option 2"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => setOption2(e.target.value)}
        />
      </Grid>
      <Grid item md={8}>
        <TextField
          type="text"
          variant="outlined"
          label="Option 3"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => setOption3(e.target.value)}
        />
      </Grid>
      <Grid item md={8}>
        <TextField
          type="text"
          variant="outlined"
          label="Option 4"
          size="small"
          style={{ width: "100%" }}
          onChange={(e) => setOption4(e.target.value)}
        />
      </Grid>
    </>
  );

  const addQuestionButton = (
    <Grid item className="text-center" xs={12}>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={() => setCreateQuestion(true)}
      >
        +Add Question
      </Button>
    </Grid>
  );

  const saveCancelButtons = (
    <>
      <Grid item>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setCreateQuestion(false)}
        >
          Cancel
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => addQuestion()}
        >
          Save
        </Button>
      </Grid>
    </>
  );
  return (
    <>
      <Grid container spacing={1}>
        {isCreatingQuestion && QuizFields}
      </Grid>

      <Grid container spacing={1}>
        {isCreatingQuestion ? saveCancelButtons : addQuestionButton}
      </Grid>

      <Grid container>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

QuizCreator.propTypes = {
  getQuestion: PropTypes.func,
};

AcademicTest.propTypes = {
  setQuiz: PropTypes.func.isRequired,
};

export default AcademicTest;
