import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import TextFields from "./TextField";
// import MuiModal from "./Modal";
// import axios from "axios";

export default function MuiTable(props) {
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
        sx={{ width: "60vw", border: "1px solid black" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{props.name1}</TableCell>
              <TableCell>{props.action1}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.categories?.map((c) => (
              <TableRow
                key={c.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell key={c._id}>{c.name}</TableCell>
                <TableCell>
                  {" "}
                  <button
                    className="table_btn table_btn_update"
                    onClick={() => {
                      props.setSelected(c);
                    }}
                  >
                    {/* <MuiModal
                      TextField={
                        <TextFields
                          value={updatedname}
                          setValue={setUpdatedname}
                          handlesubmit={handleUpdateSubmit}
                          label={"Update-Category"}
                          // data={c}
                          // setSelected={setSelected}
                        />
                      }
                      Name={"Update"}
                    /> */}
                    {props.modal}
                  </button>
                </TableCell>
                <TableCell>
                  {" "}
                  <button className="table_btn btn_cart" onClick={()=>{props.handledelete(c._id)}}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>{/* <Modal/> */}</div>
    </>
  );
}
