import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import MuiTable from "../../components/Layout/MeterialUiComponents/Table";
import TextFields from "../../components/Layout/MeterialUiComponents/TextField";
import Modal from "../../components/Layout/MeterialUiComponents/Modal";
import "./CreateCategory.css";
const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [updatedname, setUpdatedname] = useState("");
  const [selected, setSelected] = useState(null);

  // get all cat

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      //console.log(error);
      toast.error("Something went wrong in geeting category");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/category/create-category`,
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      //console.log(error);
      // toast.error("somthing went wrong in input form");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // //console.log(e)
      //console.log(selected._id);
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`,
        { name: updatedname }
      );
      if (data.success) {
        toast.success(`${updatedname} updated Successfully`);
        setSelected(null);
        setUpdatedname("");
        getAllCategory();
      }
    } catch (error) {
      //console.log(error);
      toast.error(error);
    }
  };
  // Delete Category
  const handleDelete = async (id) => {
    try {
      // //console.log(e)

      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/category/delete-category/${id}`
      );
      if (data.success) {
        toast.success(`${name} deleted Successfully`);
        getAllCategory();
      }
    } catch (error) {
      //console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard -Create Category"}>
      <div className="full_container">
        <div className="left_sidebarContainer">
          <AdminMenu />
        </div>
        <div className="right_sidebarContainer">
          <div className="card_container">
            <p>
              Create Catagory
              <TextFields
                value={name}
                setValue={setName}
                handlesubmit={handleSubmit}
                label={"Create-Category"}
              />
            </p>
          </div>

          <div className="table_container">
            <MuiTable
              name1={"Category-Name"}
              action1={"Action"}
              categories={categories}
              setSelected={setSelected}
              handledelete={handleDelete}
              modal={
                <Modal
                  Name={"Update"}
                  TextField={
                    <TextFields
                      value={updatedname}
                      setValue={setUpdatedname}
                      handlesubmit={handleUpdateSubmit}
                      label={"Update-Category"}
                      placeholder={name}
                    />
                  }
                />
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
