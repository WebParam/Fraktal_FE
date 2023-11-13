import React from "react";
import Chart from "react-google-charts";

const LineChart = () => {
  const data = [
    ["Year", "Developers", "Companies"],
    ["January", 1000, 400],
    ["February", 1170, 460],
    ["March", 660, 1120],
    ["April", 1030, 540],
    ["May", 1000, 400],
    ["June", 1170, 460],
    ["July", 660, 1120],
    ["August", 1030, 540],
    ["September", 1000, 400],
    ["October", 1170, 460],
    ["November", 660, 1120],
    ["December", 1030, 540],
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
