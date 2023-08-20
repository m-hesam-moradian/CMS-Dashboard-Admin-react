import React from "react";
import "./LgWidget.css";
import {transActions} from "./../../../Data"


export default function LgWidget() {
  console.log(transActions);
  const Button = ({ type }) => {
    return <button className={type}>{type}</button>;
  };
  return (
    <div className="LgWidget">
      <h3>Recent Transactions</h3>
      <table>
        <tr>
          <th>Customer</th>
          <th>date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {transActions.map((user) => (
          <tr>
            <td>
              <img src={user.img} alt="" />
              <span>{user.customer}</span>
            </td>
            <td>{user.date}</td>
            <td>${user.Amount}</td>
            <td>
              <Button type={user.status}></Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
