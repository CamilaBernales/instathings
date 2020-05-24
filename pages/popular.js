import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import ProductDetails from "../components/layout/ProductDetails";
import useProducts from "../hooks/useProducts";

const Popular = () => {
    
  const { products } = useProducts('votes');

  return (
    <div>
      <Layout>
        <div className="product-list">
          <div className="container">
            <ul className="bg-white">
              {products.map((product) => (
                <ProductDetails key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Popular;
