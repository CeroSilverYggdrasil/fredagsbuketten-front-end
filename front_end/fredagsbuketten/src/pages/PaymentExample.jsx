import React from "react";
import { Link } from "react-router-dom";

function PaymentExample() {
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
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Betalning :D
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentExample;
