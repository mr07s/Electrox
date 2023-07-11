import axios from 'axios';
import React,{useState ,useEffect} from 'react'
import Layout from '../components/Layout/Layout/Layout'
import MuiCard from '../components/Layout/MeterialUiComponents/Card';
import {useAuth} from '../context/auth'
import { Checkbox } from 'antd';
import { toast } from 'react-hot-toast';

const HomePage = () => {

  const [products,setProducts] =useState();
  const [categories,setCategories] =useState();
  const [check,setChecked] =useState([]);
// get products
//Use reducers instead of using getAllProducts many time

const getAllProducts = async()=>{

try {
  const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-product`)
  setProducts(data.Allproducts);
 

} 
catch (error) {
  console.log(error);
}


}

//get all cat
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



//filter by cat
 const handleFilter =(value,id)=>{
//all the checked value will be stored here 
let all =[...check]
if(value)
{
all.push(id)
}
else{
  all=all.filter((c)=> c!=id)
}
setChecked(all);




 }

useEffect(()=>{
  getAllProducts();
  getAllCategory();
},[])


  return (
    <Layout title={"All Products - Best Offers"} >
   
   <div className="homepage_container">

   <div className="side_filter">
    <h6>Filter By Category</h6>
    {
      categories?.map(c=>(
<Checkbox  key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)}>
  {c.name}
</Checkbox>
      ))
    }
    </div>   
 <div className="all_products">
  {JSON.stringify(check,null,4)}
<h4>All Products</h4>
<div className="products_items">
{
      products?.map((p)=>(
        // <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id} style={{textDecoration:'none'}}>
        <MuiCard product_name={p.name}  key={p._id}  products_description={p.description} product_id={p._id}/>
        // </Link>
      ))
    }
   


</div>
 </div>

   </div>

      </Layout>
  )
}

export default HomePage