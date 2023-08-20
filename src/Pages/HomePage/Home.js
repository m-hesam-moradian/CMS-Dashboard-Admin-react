import React from "react";
import Feature from "./../../Components/feature/Feature";
import Chart from "./../../Components/chart/chart";
import { chartdata } from "./../../Data";
import SmWidget from "./../../Components/Widgets/SmWidget/SmWidget";
import LgWidget from "./../../Components/Widgets/LgWidget/LgWidget";
import "./Home.css";

export default function Home() {
  // console.log(Data.sale);
  return (
    <div className="home">
      <div className="feature-container">
        <Feature
          title="revanue"
          price="2,798"
          percent="11.5"
          arrow="ArrowDownwardIcon"
          description="compared to last month"
        />
        <Feature
          title="sales"
          price="12,456"
          percent="22.8"
          arrow="ArrowUpwardIcon"
          description="compared to last month"
        />
        <Feature
          title="cost"
          price="798"
          percent="1.9"
          arrow="ArrowDownwardIcon"
          description="compared to last month"
        />
      </div>
      <div className="chart">
        <Chart grid title="Month Salese" data={chartdata} dataKey={"sale"} />
      </div>
      <div className="widgets">
        <SmWidget></SmWidget>
        <LgWidget></LgWidget>
      </div>
    </div>
  );
}
