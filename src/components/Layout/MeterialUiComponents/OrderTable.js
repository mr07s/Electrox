import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;
// import TextFields from "./TextField";
// import MuiModal from "./Modal";
// import axios from "axios";

export default function OrderTable(props) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [updatedname, setUpdatedname] = React.useState("");
  // const [selected, setSelected] = React.useState(null);

  // const handleUpdateSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // console.log(e)
  //     console.log(selected._id);
  //     const { data } = await axios.put(
  //       `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
  //       { name: updatedname }
  //     );
  //     if (data.success) {
  //       // toast.success(data.message);
  //       setSelected(null);
  //       setUpdatedname("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // toast.error(error);
  //   }
  // };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: "90vw", border: "1px solid black" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Buyer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.order?.map((o, i) => (
              <>
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell key={i}>{i + 1}</TableCell>

                  <TableCell key={i}>
                  <Select
                      bordered={false}
                      onChange={
                        (value)=>props.handleChangeStatus(o._id,value)
                      }
                      defaultValue={o?.status}
                    >
                   {
                   props.status?.map((s, i)=>(
   <Option key={i} value={s}>
                        
                      </Option>
                      ))}

                    </Select>
                  </TableCell>

                  <TableCell key={i}>{o?.buyer?.name}</TableCell>

                  <TableCell key={i}>{moment(o?.createAt).fromNow()}</TableCell>

                  <TableCell key={i}>
                    {o?.payment?.success ? "Success" : "Failed"}
                  </TableCell>

                  <TableCell key={i}>{o?.products?.length}</TableCell>

                  {/* 
                buyer={o?.buyer?.name} date={moment(o?.createAt).fromNow()} payment={o?.payment?.success ? "Success" :"Failed"} products={o?.products?.length} */}
                </TableRow>

                <div>
                  {o?.products?.map((p) => (
                    <div className="items">
                      <div className="image">
                        <img
                          src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p._id}`}
                          alt=""
                          style={{ height: "200px" }}
                        />
                      </div>
                      <div className="product">
                        <h4>{p.name}</h4>
                        <p>{p.description}</p>
                        <p>{p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>{/* <Modal/> */}</div>
    </>
  );
}
