import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-20 border-b bg-black text-white">
        <div className="flex justify-around px-10 py-2 gap-x-4">
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </div>
      </header>
      <Outlet />
      <footer className="h-20 border-t bg-black text-white">Footer</footer>
    </div>
  );
}

export default Layout;
