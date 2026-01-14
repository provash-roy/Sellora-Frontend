import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "all";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        if (category && category !== "all") {
          // try fetching by category (dummyjson has category endpoint)
          const res = await axios.get(
            `https://dummyjson.com/products/category/${encodeURIComponent(
              category
            )}`
          );
          setProducts(res.data.products || []);
        } else {
          const res = await axios.get("https://dummyjson.com/products");
          setProducts(res.data.products || []);
        }
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const filtered = products.filter((p) => {
    if (!q) return true;
    return p.title.toLowerCase().includes(q.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          {category === "all" ? "All Products" : `Category: ${category}`}
        </h2>
        <div className="text-sm text-gray-500">
          {loading ? "Loading..." : `${filtered.length} items`}
        </div>
      </div>

      <div className="mb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const val = form.q.value.trim();
            const params = {};
            if (val) params.q = val;
            if (category && category !== "all") params.category = category;
            setSearchParams(params);
          }}
          className="flex gap-2 max-w-md"
        >
          <input
            defaultValue={q}
            name="q"
            className="w-full border rounded px-3 py-2"
            placeholder="Search within results..."
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">
            Search
          </button>
          <Link to="/products" className="px-4 py-2 border rounded">
            Reset
          </Link>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg h-48" />
            ))
          : filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Products;
