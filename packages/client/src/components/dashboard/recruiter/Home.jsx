import React from "react";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Bar, Line } from "react-chartjs-2";

function Home() {
  const { userData } = useSelector((state) => state.auth);
  return (
    <>
      <Paper className="p-3">
        <h4 className="mb-0 pb-0">
          Welcome back! <b>{userData.username}</b>
        </h4>
      </Paper>

      <Grid container spacing={5}>
        <Grid item md={4}>
          <Paper className="mt-3" style={{ height: "50vh" }}>
            <Line
              data={{
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                  {
                    label: "Success vs Failure",
                    data: [65, 59, 50, 51, 56, 55, 40],
                    backgroundColor: [
                      // "rgba(255, 99, 132, 0.2)",
                      "rgba(59, 107, 57, 0.2)",
                      "rgba(255, 205, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(201, 203, 207, 0.2)",
                    ],
                    borderWidth: 2,
                  },
                ],
              }}
              width={400}
              height={600}
              options={{ maintainAspectRatio: false }}
            />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className="mt-3" style={{ height: "50vh" }}>
            <Bar
              data={{
                labels: ["pass", "fail"],
                datasets: [
                  {
                    label: "Test attempts per day",
                    data: [65, 59],
                    backgroundColor: [
                      "rgba(77, 141, 74, 0.2)",
                      "rgba(231, 69, 69, 0.2)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              width={400}
              height={600}
              options={{ maintainAspectRatio: false }}
            />
          </Paper>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  );
}
export default Home;
