import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

export default function DashCard({ background, title, subtitle }) {
  const classes = useStyles();
  return (
    <Card className={`${classes[background]} ${classes.container}`}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  container: {
    width: "80%",
    height: "150px",
    color: "white",
  },
  blueBack: {
    background: "rgb(70,147,221)",
    background:
      " linear-gradient(57deg, rgba(70,147,221,1) 25%, rgba(69,143,214,1) 75%, rgba(67,133,190,1) 100%)",
  },
  redBack: {
    background: " rgb(204,96,96)",
    background:
      "linear-gradient(57deg, rgba(204,96,96,1) 25%, rgba(207,100,100,1) 75%, rgba(198,86,86,1) 100%)",
  },
  goldBack: {
    background: "rgb(223,158,51)",
    background:
      "linear-gradient(57deg, rgba(223,158,51,1) 5%, rgba(232,180,74,1) 75%, rgba(222,151,51,1) 100%)",
  },
  purpleBack: {
    background: " rgb(75,91,189)",
    background:
      " linear-gradient(57deg, rgba(75,91,189,1) 25%, rgba(71,87,182,1) 75%, rgba(57,70,149,1) 100%)",
  },
});
