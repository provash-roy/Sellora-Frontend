import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/products");
        const productData = res.data.products;
        setProducts(productData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        !query || p.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white space-y-8">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover great products
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Hand-picked items and daily deals for you.
              </p>

              <div className="flex gap-3 max-w-md">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
                  placeholder="Search products..."
                />
                <button
                  onClick={() => setQuery("")}
                  className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg border border-white/10"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="hidden md:block w-80 h-48 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
              <span className="text-lg">Featured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded px-3 py-2 bg-gray-800 text-white border-gray-700"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="text-sm text-gray-300">
            {loading ? "Loading..." : `${filtered.length} items`}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-700 rounded-lg h-48"
                />
              ))
            : filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
