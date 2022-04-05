import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BChart = ({ data, dataKey1, dataKey2, xDataKey, toolTip }) => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        {toolTip && <Tooltip />}
        <Legend />
        <Bar dataKey={dataKey1} fill="#8884d8" background={{ fill: "#eee" }} />
        {dataKey2 && <Bar dataKey={dataKey2} fill="#82ca9d" />}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BChart;
