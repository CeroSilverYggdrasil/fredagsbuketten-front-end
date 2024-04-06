import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 border-b bg-green-800 text-white">
        <div className="flex justify-around px-10 py-2 gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/ReGiStEr">Register</Link>
          <Link to="/admin_dashboard">Dashboard</Link>
        </div>
      </header>
      <Outlet />
      <footer className="h-80 border-t bg-green-800 text-white">Footer</footer>
    </div>
  );
}

export default Layout;
