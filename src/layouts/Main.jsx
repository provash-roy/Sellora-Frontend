import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Main;
