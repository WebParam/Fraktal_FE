import React from "react";
import Chart from "react-google-charts";

const LineChart = () => {
  const data = [
    ["Year", "Developers", "Companies"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["May", 1000, 400],
    ["June", 1170, 460],
    ["July", 660, 1120],
    ["Aug", 1030, 540],
    ["Sep", 1000, 400],
    ["Oct", 1170, 460],
    ["Nov", 660, 1120],
    ["Dec", 1030, 540],
  ];

  const options = {
    title: "Developers   Company",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div>
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        graph_id="LineChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    </div>
  );
};

export default LineChart;
