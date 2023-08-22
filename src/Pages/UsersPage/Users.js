import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UsertsList } from "./../../Data";
import { List } from "@mui/material";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import "./Users.css";
// import { useEffect } from "react";
// function createData(
//   Name: string,
//   Gmail: string,
//   Status: string,

// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];
export default function Users() {
  let [UserList, setUsers] = useState(UsertsList);

  const removeHandler = (rowID) => {
    setUsers(UserList.filter((index) => index.ID != rowID));
  
  };

  return (
    <div className="Users">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Gmail</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UserList.map((row) => (
              <TableRow
                className="Users-row"
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell>{row.name}</TableCell> */}
                <TableCell align="left">{row.ID}</TableCell>
                <TableCell align="left">
                  <img className="profile" src={row.img} alt="" />
                  {row.Name}
                </TableCell>
                <TableCell align="left">{row.Gmail}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                  <div className="Action">
                    <Link to={"/User/" + row.ID}>
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
