import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        const productData = res.data.products;
        setProducts(productData);
        console.log(productData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-8">
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          {products.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
