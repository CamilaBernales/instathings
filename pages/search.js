import React,{useEffect, useState} from "react";
import Layout from '../components/layout/Layout';
import {useRouter } from 'next/router';
import useProducts from "../hooks/useProducts";
import ProductDetails from '../components/layout/ProductDetails';


const Search = () => {

    const router  = useRouter();
    const {query : {q}} =  router;
    
    //all products
    const { products } = useProducts('creado');
    const [result, setResult] = useState([])

    useEffect(() =>{

        const search = q.toLowerCase();
        const results = products.filter(product => {
            return(
                product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
            )
            
        });
        setResult(results);
    },[q, products])

  return (
      <div>
          <Layout>
              <div className="product-list">
                <div className="container">
                    <ul  className="bg-white">
                       {result.map(product => (
                            <ProductDetails
                                key={product.id}
                                product={product}
                            />
                       ))} 
                    </ul>
                </div>
              </div>
          </Layout>
      </div>
  )
};
export default Search;
