import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ArChart = ({ data, dataKey1, dataKey2, dataKey3, xDataKey, toolTip }) => {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        {toolTip && <Tooltip />}
        <Legend />
        <Area
          type="monotone"
          dataKey={dataKey1}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        {dataKey2 && (
          <Area
            type="monotone"
            dataKey={dataKey2}
            stackId="2"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        )}
        {dataKey3 && (
          <Area
            type="monotone"
            dataKey={dataKey3}
            stackId="3"
            stroke="#ffc658"
            fill="#ffc658"
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ArChart;
