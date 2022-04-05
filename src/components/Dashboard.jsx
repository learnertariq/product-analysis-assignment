import React, { useEffect, useState } from "react";
import ArChart from "./Charts/ArChart";

import BChart from "./Charts/BChart";
import LChart from "./Charts/LChart";
import PChart from "./Charts/PChart";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="container">
      <h1>Dashboard</h1>
      <div className="charts">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <div style={{ width: "100%", height: 300 }}>
              <LChart
                data={data}
                dataKey1="investment"
                dataKey2="revenue"
                xDataKey="month"
                toolTip
              />
            </div>
          </div>
          <div className="col">
            <div style={{ width: "100%", height: 300 }}>
              <BChart
                data={data}
                dataKey1="investment"
                dataKey2="revenue"
                xDataKey="month"
                toolTip
              />
            </div>
          </div>
          <div className="col">
            <div style={{ width: "100%", height: 300 }}>
              <ArChart
                data={data}
                xDataKey="month"
                dataKey1="investment"
                dataKey2="revenue"
                toolTip
              />
            </div>
          </div>
          <div className="col">
            <PChart
              data1={data}
              data2={data}
              dataKey1="sell"
              dataKey2="revenue"
              toolTip
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
