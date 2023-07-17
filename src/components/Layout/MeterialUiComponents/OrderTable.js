import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function OrderTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Buyer</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">Payment</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          <TableRow
            //   key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">{props.index}</TableCell>
            <TableCell align="right">{props.status}</TableCell>
            <TableCell align="right">{props.buyer}</TableCell>
            <TableCell align="right">{props.date}</TableCell>
            <TableCell align="right">{props.payment}</TableCell>
            <TableCell align="right">{props.products}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
