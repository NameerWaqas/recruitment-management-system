import React from "react";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CProgress, CProgressBar } from "@coreui/react";
import { makeStyles, StylesProvider } from "@material-ui/core";
import Fade from "react-reveal/Fade";

import DashCard from "../../../components/card/card";
import ChartComp from "../../../components/chart/chart";

const tempPassVsFail = [
  { day: "Monday", pass: 80, fail: 20 },
  { day: "Tuesday", pass: 60, fail: 40 },
  { day: "Wednesday", pass: 50, fail: 50 },
  { day: "Thursday", pass: 90, fail: 10 },
  { day: "Friday", pass: 70, fail: 30 },
  { day: "Saturday", pass: 90, fail: 10 },
  { day: "Sunday", pass: 40, fail: 60 },
];

function Home() {
  const { userData } = useSelector((state) => state.auth);
  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const statsCards = (
    <Grid container>
      <Grid item xs={6} md={3} className={classes.card}>
        <DashCard
          background="purpleBack"
          title="Card 1"
          subtitle="members online"
        />
      </Grid>
      <Grid item xs={6} md={3} className={classes.card}>
        <DashCard
          background="blueBack"
          title="Card 2"
          subtitle="members online"
        />
      </Grid>
      <Grid item xs={6} md={3} className={classes.card}>
        <DashCard
          background="goldBack"
          title="Card 3"
          subtitle="members online"
        />
      </Grid>
      <Grid item xs={6} md={3} className={classes.card}>
        <DashCard
          background="redBack"
          title="Card 4"
          subtitle="members online"
        />
      </Grid>
    </Grid>
  );

  const table = (
    <TableContainer
      component={Paper}
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundColor: "#212529",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>
              Dessert (100g serving)
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Calories
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                className={classes.tableCell}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.calories}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.fat}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.carbs}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const tableWrapper = (
    <Grid
      item
      md={12}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {table}
    </Grid>
  );

  const ProgressBar = ({ day, pass, fail }) => (
    <Grid container>
      <Grid md={3}>
        <p style={{ color: "white" }}>{day}</p>
      </Grid>
      <Grid item md={9} xs={12}>
        <CProgress height={5} className="mb-3 bg-dark">
          <CProgressBar value={pass} color="success"></CProgressBar>
        </CProgress>
        <CProgress
          height={5}
          className="mb-3 bg-dark"
          style={{ backgroundColor: "#D16767", marginTop: "5px" }}
        >
          <CProgressBar value={fail} color="danger"></CProgressBar>
        </CProgress>
      </Grid>
    </Grid>
  );

  const GenderBar = ({ male, female }) => (
    <>
      <Grid container>
        <Grid md={2} xs={12}>
          <p style={{ color: "white" }}>Male</p>
        </Grid>
        <Grid item md={10} xs={12}>
          <CProgress height={5} className="mb-3 bg-dark">
            <CProgressBar value={40} color="warning"></CProgressBar>
          </CProgress>
        </Grid>
      </Grid>

      <Grid container>
        <Grid md={2}>
          <p style={{ color: "white" }}>Female</p>
        </Grid>
        <Grid item md={10}>
          <CProgress height={5} className="mb-3 bg-dark">
            <CProgressBar value={50} color="warning"></CProgressBar>
          </CProgress>
        </Grid>
      </Grid>
    </>
  );

  const passVsFail = (
    <Grid container className={classes.passFail} spacing={2}>
      <Grid item md={6} xs={12}>
        {tempPassVsFail.map((x) => (
          <ProgressBar
            day={x?.day || ""}
            pass={x?.pass || 0}
            fail={x?.fail || 0}
          />
        ))}
      </Grid>
      <Grid item md={6} xs={12}>
        <GenderBar />
      </Grid>
    </Grid>
  );

  const chartWrapper = (
    <Grid container>
      <Grid item md={12} xs={12} className={classes.chartWrapper}>
        <ChartComp />
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.container}>
      <Fade top>{statsCards}</Fade>
      <Fade bottom>{chartWrapper}</Fade>
      <Fade bottom>{tableWrapper}</Fade>
      <Fade bottom>
        <Grid container>{passVsFail}</Grid>
      </Fade>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#0A0B18",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  table: {
    minHeight: "200px",
  },
  tableCell: { color: "white" },
  passFail: {
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "50px",
    backgroundColor: "#212529",
    paddingTop: "20px",
    paddingLeft: "10px",
    borderRadius: "5px",
  },
  chartWrapper: {
    marginLeft: "30px",
    marginRight: "30px",
    overflow: "hidden",
    padding: "2%",
    backgroundColor: "#202428",
    marginTop: "50px",
    borderRadius: "5px",
  },
});

export default Home;
