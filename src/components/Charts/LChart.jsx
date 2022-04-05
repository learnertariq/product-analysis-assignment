import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LChart = ({ data, dataKey1, dataKey2, xDataKey, toolTip }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        {toolTip && <Tooltip />}
        <Legend />
        <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" />
        {dataKey2 && (
          <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LChart;
