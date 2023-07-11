
import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { toast } from 'react-hot-toast';
import AdminMenu from '../../components/Layout/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout/Layout'
import MuiCard from '../../components/Layout/MeterialUiComponents/Card';

const Product = () => {

const [products ,setProducts] = useState([]);




  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-product`
      );
      if (data?.success) {
        setProducts(data.Allproducts)
        console.log(data.Allproducts)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in geeting category");
    }
  };















  useEffect(() => {
    getAllProducts();
  }, []);
 
 
 

  return (
    <Layout>
    <div className="full_container">
    
    <div className="left_sidebarContainer">
       <AdminMenu/>
    </div>
    <div className="right_sidebarContainer">
    <div className="card_container">
   <p>All products</p>
    {
      products?.map((p)=>(
        <MuiCard product_name={p.name} id={p._id}/>

      ))
    }
   
    </div>
      
    </div>
    
       </div>

    </Layout>
  )
}

export default Product