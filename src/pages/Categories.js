import React from 'react'
import { Link } from 'react-router-dom';
import useCategory from '../components/Layout/hooks/useCategory'
import Layout from '../components/Layout/Layout/Layout'
const Categories = () => {
const categories =useCategory();

    return (
    <Layout title={"All Categories"}>
<h1>All Categories</h1>
<div className="category_container">
{
categories?.map(c=>(
    <div className="category_items" key={c._id}>


    <Link to={`/category/${c.slug}`}>
    {c.name}
</Link>


    </div>

))
}

</div>


    </Layout>
  )
}

export default Categories