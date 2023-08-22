import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { productList } from "./../../Data";
import { List } from "@mui/material";
import {Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import "./Products.css";

export default function Products() {
  let [ProductsList, setProducts] = useState(productList);

  const removeHandler = (rowID) => {
    setProducts(ProductsList.filter((index) => index.ID != rowID));
    console.log(productList);
  };

  return (
    <div className="Products">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="left">Count</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ProductsList.map((row) => (
              <TableRow
                className="Products-row"
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell>{row.name}</TableCell> */}
                <TableCell align="left">{row.ID}</TableCell>
                <TableCell align="left">
                  <img className="profile" src={row.img} alt="" />
                  {row.Name}
                </TableCell>
                <TableCell align="left">{row.count}</TableCell>
                <TableCell align="left">${row.price}</TableCell>
                <TableCell align="left">
                  <div className="Action">
                    <Link to={"/Product/" + row.ID}>
                      <button>Edite</button>
                    </Link>
                    <DeleteIcon
                      className="removeIcon"
                      onClick={() => removeHandler(row.ID)}
                    ></DeleteIcon>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
