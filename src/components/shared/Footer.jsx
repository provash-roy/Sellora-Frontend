import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-indigo-500 mb-4 inline-block">
                            Sellora
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Your premium destination for quality products. Hand-picked items, daily deals, and exceptional service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
                            <li><Link to="/products" className="hover:text-indigo-400 transition">Products</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/faq" className="hover:text-indigo-400 transition">FAQ</Link></li>
                            <li><Link to="/shipping" className="hover:text-indigo-400 transition">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="hover:text-indigo-400 transition">Returns & Refunds</Link></li>
                            <li><Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Sellora. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400">
                        {/* Social Icons Placeholders */}
                        <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-facebook"></i> FB</a>
                        <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-twitter"></i> TW</a>
                        <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-instagram"></i> IG</a>
                        <a href="#" className="hover:text-indigo-400 transition"><i className="fab fa-linkedin"></i> IN</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
