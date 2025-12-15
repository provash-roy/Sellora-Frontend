import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold truncate">{product.title}</h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>
          <Link to={`products/${product.id}`}>See details</Link>
          <button className="bg-black text-white px-4 py-2 text-sm rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
