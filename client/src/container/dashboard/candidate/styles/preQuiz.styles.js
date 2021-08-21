import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  rightHalf: {
    backgroundColor: "#0A0B18",
    color: "white",
    margin: 0,
    padding: 0,
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "10%",
  },
  ol: {
    paddingLeft: "15%",
    fontSize: "120%",
    fontWeight: "normal",
    fontFamily: "sans-serifs",
  },
  instructions: {
    paddingLeft: "10%",
  },
  continueButton: {
    backgroundColor: "green",
    color: "white",
    width: "100px",
    marginLeft: "10%",
    marginTop: "2%",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
    paddingRight: "20px",
    justifyContent: "space-between",
    paddingTop: "50px",
    paddingBottom: "100px",
    backgroundColor: "#343a40",
    color: "white",
  },
  stats: {
    display: "flex",
    flexDirection: "row",
  },
  testDuration: { marginRight: "10px" },
  totalQuestions: { marginLeft: "10px" },
});
