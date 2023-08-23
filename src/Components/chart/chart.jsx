import React from "react";
import "./chart.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export default function chart({ grid, title,dataKey, data }) {
  return (
    <div className="chart-container">
      <h4 className="chart-title">{title}</h4>

      <ResponsiveContainer width="99%" aspect={4}>
        <LineChart className="lineChart" data={data}>
          <XAxis dataKey={dataKey} stroke="#5550bd" />
          {/* <YAxis /> */}
          <Line type="monotone" dataKey="sale" stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
