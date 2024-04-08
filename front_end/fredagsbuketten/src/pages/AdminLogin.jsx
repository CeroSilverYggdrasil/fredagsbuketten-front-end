import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function AdminLogin() {
  return (
    <div>
      <header className="flex h-20 border-b bg-zinc-900 text-white">
        <div className="flex justify-around px-10 py-2 gap-x-4">
          <Link to="/" className="hover:underline hover:transition-all">
            Home
          </Link>
          <Link to="/products" className="hover:underline hover:transition-all">
            Products
          </Link>
          <Link to="/admin" className="hover:underline hover:transition-all">
            Admin
          </Link>
        </div>
      </header>
      <div className="min-w-xl">
        <div className="mt-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="w-auto h-12 mx-auto"
              src="https://cdn-icons-png.freepik.com/512/6681/6681204.png"
              alt="Login Admin"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Logga in
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
