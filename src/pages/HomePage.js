import axios from 'axios';
import React,{useState ,useEffect} from 'react'
import './cssFile/homepage.css'
import Layout from '../components/Layout/Layout/Layout'
import MuiCard from '../components/Layout/MeterialUiComponents/Card';
import {useAuth} from '../context/auth'
import { Checkbox ,Radio} from 'antd';
import { toast } from 'react-hot-toast';
import { Prices } from '../components/Layout/FilterUtility/Prices';
// import { AirportShuttle } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
const HomePage = () => {

  const [products,setProducts] =useState([]);
  const [categories,setCategories] =useState();
  const [check,setChecked] =useState([]);
  const [radio,setRadio] =useState([]);
  const [totalProducts,setTotalProducts] =useState(0);
  const [page,setPage] =useState(1);
  const [loading,setLoading] =useState(false);
// get products
//Use reducers instead of using getAllProducts many time
 const [sidebar,setSidebar] =useState(0);









const getAllProducts = async()=>{

try {
  setLoading(true)
  const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`)
  setLoading(false)
  setProducts(data?.productlist);
 

} 
catch (error) 
{
  setLoading(false)
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

 //get Total Count
const getTotalCount =async()=>{

  try {
    const{data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-count`)
    setTotalProducts(data?.totalProducts)
  
  
  
  
  } catch (error) {
    console.log(error)
  }
  
  
  
  
  }
useEffect(()=>{
if(page===1)
return;
loadmore();

},[page])

const loadmore =async()=>{
 

try {
  setLoading(true)
  const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/products/product-list/${page}`)
  setLoading(false)
  setProducts([...products,...data?.productlist])
} catch (error) {
  console.log(error)
  setLoading(false)
}



}





useEffect(()=>{
  if(!check.length || !radio.length)
  {
    getAllProducts();
    getAllCategory();
    getTotalCount();
  }
 
},[])

useEffect(()=>{

if(check.length||radio.length) filterProduct()


},[check,radio])
const filterProduct = async()=>{


try {
  const {data} = await axios.post(`${process.env.REACT_APP_API}/api/v1/products/product-filters`,{check,radio});
  setProducts(data?.products)

} catch (error) {
  
}

}










  return (
    <Layout title={"All Products - Best Offers"} >
   
   <div className="homepage_container">
    {
      sidebar ===0 ?(
<div className="filter_btn_container">

<button onClick={()=>setSidebar(1)} className='filter_btn'>Filters</button>
</div>
      ):(<div className="filter_close_btn_container">

      <button onClick={()=>setSidebar(0)} className='filter_close_btn'><CloseIcon/></button>
      </div>)
}
{ 
 sidebar?(
   <div className="side_filter">

    <div className="filter_by_category">
    <h6>Category</h6>
    {
      categories?.map(c=>(
<Checkbox  key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)}
className="fliter_checkbox"
>
  {c.name}
</Checkbox>
      ))
    }
    {/* <div>
     {JSON.stringify(check,null,4)}
     {JSON.stringify(radio,null,4)}

    </div> */}
    </div>



<div className="filter_by_price">
  <h6>price</h6>
<Radio.Group onChange={(e)=>setRadio(e.target.value)} className="filter_radiogroup">
{
  Prices?.map(p=>(
    <div key={p._id}>
      <Radio value={p.array}  className="filter_radiobutton" >{p.name}</Radio>

    </div>
  ))
}


</Radio.Group>
<div className="filter_reset">
<button className='btn btn_resetfilter' onClick={()=>window.location.reload()}>Reset Filter</button>
</div>


</div>



    </div>   




):(<></>)}




 <div className="all_products">
 
{/* <h4>All Products</h4> */}
<div className="products_items">
{
      products?.map((p)=>(
        // <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id} style={{textDecoration:'none'}}>
        <MuiCard product_name={p.name} product_slug={p.slug} key={p._id}  product_price={p.price} products_description={p.description} product_id={p._id}/>
        // </Link>
      ))
    }
   
   </div>

<div className="total_product_count" >{products && products.length < totalProducts &&(
  <button className='btn load_products' onClick={(e)=>{
    e.preventDefault();
    setPage(page+1);
  }}>{loading ?'Loading ...':"Loadmore"}
  </button>
)}</div>


 </div>

   </div>

      </Layout>
  )
}

export default HomePage