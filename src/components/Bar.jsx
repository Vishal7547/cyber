import React from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
Chart.register(CategoryScale);
const Graph = (props) => {
  const Data = [
    {
      id: 1,
      day: "Sunday",
      uses: 80000,
      userLost: 823,
    },
    {
      id: 2,
      day: "Monday",
      uses: 45677,
      userLost: 345,
    },
    {
      id: 3,
      day: "Tuesday",
      uses: 78888,
      userLost: 555,
    },
    {
      id: 4,
      day: "Wednesday",
      uses: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      day: "Thursday",
      uses: 4300,
      userLost: 234,
    },
    {
      id: 6,
      day: "Friday",
      uses: 4300,
      userLost: 234,
    },
    {
      id: 7,
      day: "Saturday",
      uses: 4300,
      userLost: 234,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "Power Used ",
        data: Data.map((data) => data.uses),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Daily Uses",
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
