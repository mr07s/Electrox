import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout/Layout'
import MuiCard from '../components/Layout/MeterialUiComponents/Card';
import { useSearch } from '../context/search'

const Search = () => {
    const [value,setValue]=useSearch({});
    console.log(value?.results?.result)
  return (
    <Layout title={'Search Results'}>
        <div className='search_container'>
<div className="searched_products">
<h1>Search Results</h1>
<h6>
{value?.results.length < 1 ? "No Products Found" :
`Found ${value?.results?.result?.length }`
}

</h6>
<p>All products</p>
    {
      value?.results?.result?.map((p)=>(
        <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id} style={{textDecoration:'none'}}>
        <MuiCard product_name={p.name}   products_description={p.description}  product_price={p.price} product_id={p._id}/>
        </Link>
      ))
    }
   

</div>

        </div>
    </Layout>
  )
}

export default Search