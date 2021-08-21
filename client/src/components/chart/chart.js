import React, { useCallback } from "react";
import { Line } from "react-chartjs-2";

export default function ChartComp() {
  const data = useCallback(
    () => ({
      labels: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "My First Dataset",
          data: [
            65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80,
            81, 56, 55, 40,
          ],
          backgroundColor: "rgba(35,49,62,0)",
          borderColor: "#21A8D8",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
        },
        {
          label: "My Second Dataset",
          data: [15, 19, 10, 11, 16, 15, 10, 15, 19, 10, 11, 16, 15],
          // backgroundColor: "rgba(35,49,62,0.5)",
          borderColor: "#4CB873",
          borderWidth: 3,
          tension: 0.3,
        },
      ],
    }),
    [1]
  );
  return (
    <div
      style={{
        height: "300px",
        overflow: "hidden",
      }}
    >
      <Line
        data={data()}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            yAxes: {
              beginAtZero: true,
              ticks: {
                autoSkip: true,
                maxTicksLimit: 6,
                color: "white",
              },
            },
            xAxes: {
              ticks: {
                color: "white",
              },
            },
          },
        }}
        width={"100%"}
      />
    </div>
  );
}
