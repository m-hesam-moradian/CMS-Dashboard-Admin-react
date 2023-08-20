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
export default function chart({ grid, title, data, dataKey }) {
  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>

      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart className="lineChart" data={data}>
          <XAxis dataKey="month" stroke="#5550bd" />
          {/* <YAxis /> */}
          <Line type="monotone" dataKey="sale" stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
