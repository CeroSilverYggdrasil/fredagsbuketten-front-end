import React from "react";
import ProductGrid from "../components/ProductGrid";
import { Link } from "react-router-dom";

function Products() {
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
      <div className="flex flex-col shadow-lg bg-slate-100">
        <ProductGrid />
      </div>
      <footer className="h-80 border-t bg-zinc-900 text-white">
        <div className="flex m-auto justify-center text-xl p-4 gap-72">
          <div>
            <p className="my-6">Ring och beställ</p>
            <h2 className="text-6xl mb-5">08 – 87 89 85</h2>
            <p className="mb-4">Öppettider</p>
            <p>Mån – fre: 10:00 – 18:00</p>
            <p>Lördag: 10:00 – 15:00</p>
            <p>Söndag: Stängt</p>
          </div>
          <div>
            <p className="my-6">Blomsterbutiken i blackeberg</p>
            <h2 className="text-6xl">Holbergsgatan 53</h2>
            <h2 className="text-6xl mb-2"> 168 48 Bromma</h2>
            <p className="hover:underline hover:transition-all">
              <a
                href="https://g.page/Underbarablomster?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visa på karta →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Products;
