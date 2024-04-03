import React from "react";
import ProductGrid from "../components/ProductGrid";

function Products() {
  return (
    <div className="flex flex-col min-h-screen shadow-lg bg-slate-100">
      <ProductGrid />
    </div>
  );
}

export default Products;
