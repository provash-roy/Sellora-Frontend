import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
            <p className="text-gray-500 mb-2">Brand: {product.brand}</p>
            <p className="text-gray-500 mb-2">Category: {product.category}</p>
            <p className="text-gray-500 mb-2">Rating: {product.rating} ⭐</p>
          </div>

          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
