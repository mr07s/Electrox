
import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { toast } from 'react-hot-toast';
import AdminMenu from '../../components/Layout/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout/Layout'
import CategoryDropdown from '../../components/Layout/MeterialUiComponents/CategoryDropdown';
import { useNavigate ,useParams } from 'react-router-dom';
import { Select } from 'antd';
import Api from '../../api';
const { Option } = Select;



const UpdateProduct = () => {

    const [categories,setCategories] =useState([]);
    const [category,setCategory] =useState("");
    const [name,setName] =useState("")
    const [description,setDescription] =useState("")
    const [price,setPrice] =useState("")
    const [quantity,setQuantity] =useState("")
    const [shipping,setShipping] =useState("")
    const [photo,setPhoto] =useState("")
    const [id,setId] =useState("");
    const navigate =useNavigate();
    const params =useParams();
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
        console.log(error);
        toast.error("Something went wrong in geeting category");
      }
    };
      
    useEffect(() => {
        getAllCategory();
       
      }, []);
     
     
   //get single products 

const getSingleProduct =async()=>{
try {
    const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`)
  
    setName(data?.singleProduct?.name);
    setId(data?.singleProduct?._id);
    setDescription(data?.singleProduct?.description);
    setPrice(data?.singleProduct?.price);
    setQuantity(data?.singleProduct?.quantity);
    setShipping(data?.singleProduct?.name);
    setCategory(data?.singleProduct?.category?._id);
    console.log(data);

}
catch (error) 
{
    console.log(error);
    // toast.error(error);
}




}


useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);









const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
//    productData.append("shipping",shipping);

      console.log(id);
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/products/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
   
   
  const handleDelete =async(e)=>{
e.preventDefault();
try 
{
let answer = window.prompt('Are you sure want to delete this product')
if(!answer) return;
const {data} =await  Api.delete(`/api/v1/products/delete-product/${id}`)
toast.success('Product Deleted Successfully');
navigate('/dashboard/admin/products')
} 
catch (error) 
{

  console.log(error);
  toast.error(error)

}




  }
   



  return (
    <Layout  title={"Dashboard -Update Product"}>
    <div className="full_container">
    
 <div className="left_sidebarContainer">
    <AdminMenu/>
 </div>
 <div className="right_sidebarContainer">
 
 <div className="dropdown_menu">
 {/* <CategoryDropdown categories={categories} name={"Category"}/>
  */}
 <Select
                 bordered={false}
                 placeholder="Select a category"
                 size="large"
                 showSearch
                 className="form-select mb-3"
                 onChange={(value) => {
                   setCategory(value);
                 }}
                 value={category}
               >
                 {categories?.map((c) => (
                   <Option key={c._id} value={c._id}>
                     {c.name}
                   </Option>
                 ))}
               </Select>
 
 
 </div>
 
 
 <div className="images_section">
    <div className="img_button">
 <label 
 className='btn'
 style={{cursor:'pointer'}}
 >
    <p>
 
    {photo ? photo.name : "Upload Photo"} 
    </p>
 <input 
 type="file"
  name='photo'
  accept='images/*' 
 onChange={(e)=>setPhoto(e.target.files[0])}
 hidden
 />
 
 </label>
 </div>
 <div className="preview_img">
 {
    photo ? (
       <div className="text_center" >
          <img  src={URL.createObjectURL(photo)} style={{height:'200px'}} alt="product_photo"/>
       </div>
    ):(
    <div className="text_center" >
    <img  
    src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${id}`}
     style={{height:'200px'}}
      alt="product_photo"/>
 </div>)
 
 }
 
 </div>
 </div>
 
 <div className="products_attributes_section">
 
 
 <div className="product_name products_attribute">
    <input type="text" 
    value={name}
    placeholder="write ProductName"
    className='product_name_input'
    onChange={(e)=>setName(e.target.value)}
    />
 </div>
 
 
 <div className="product_description products_attribute">
    <input type="text" 
    value={description}
    placeholder="Product description"
    className='product_description_input'
    onChange={(e)=>setDescription(e.target.value)}
    />
 </div>
 
 
 <div className="product_price products_attribute">
    <input type="text" 
    value={price}
    placeholder="Price"
    className='product_price_input'
    onChange={(e)=>setPrice(e.target.value)}
    />
 </div>
 
 
 <div className="product_quantity products_attribute">
    <input type="text" 
    value={quantity}
    placeholder="Quantity"
    className='product_name_input'
    onChange={(e)=>setQuantity(e.target.value)}
    />
 </div>
 
 <Select
                  bordered={false}
                  placeholder="Select Shipping"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                  value={shipping ?"Yes":"No"} 
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
 
 </div>
 
 <button className="btn submit_button" onClick={handleUpdateProduct}>
 Update Product
 
 
 </button>
   
 
 
 <button className="btn submit_button" onClick={handleDelete}>
 Delete  Product
 
 
 </button>
   
 
 
 </div>
 
    </div>
         </Layout>
  )
}

export default UpdateProduct