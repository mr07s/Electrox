import { Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Layout from "../../components/Layout/Layout/Layout";
import UserMenu from "../../components/Layout/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  //get user data

  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
    // eslint-disable-next-line
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toast.success('Registered Successfully')

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/profile`,
        { name, email, password, phone, address }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      //console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="full_container">
        <div className="left_sidebarContainer">
          <UserMenu />
        </div>
        <div className="right_sidebarContainer">
          <div className="card_container">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                // border:'1px solid black',
                alignItems: "center",
                justifyContent: "center",
                // boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                "& > :not(style)": { m: 1 },
              }}
            >
              <h3>Update</h3>
              <TextField
                // helperText="Please enter your name"
                id="name"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                helperText=" "
                id="email"
                label="Email"
                type={"email"}
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                helperText=" "
                id="password"
                label="Password"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                helperText=" "
                id="adress"
                label="Address"
                type={"text"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                helperText=" "
                id="phone"
                label="Phone"
                type={"number"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button className="btn register_submit" onClick={handleSubmit}>
                Update
              </button>
            </Box>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
