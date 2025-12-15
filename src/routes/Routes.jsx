import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Main from "../layouts/Main";
import ProductDetails from "../components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "login", element: <Login /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);
export default router;
