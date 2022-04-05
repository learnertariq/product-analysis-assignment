import React from "react";
import { PieChart, Pie, Tooltip, Legend, CartesianGrid } from "recharts";

const PChart = ({ data1, data2, dataKey1, dataKey2, toolTip }) => {
  return (
    <PieChart width={400} height={400}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      {toolTip && <Tooltip />}
      <Legend />
      <Pie
        data={data1}
        dataKey={dataKey1}
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      {data2 && (
        <Pie
          data={data2}
          dataKey={dataKey2}
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      )}
    </PieChart>
  );
};

export default PChart;
