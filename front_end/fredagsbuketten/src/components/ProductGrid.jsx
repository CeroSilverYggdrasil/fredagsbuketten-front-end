import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-2 font-semibold m-auto p-2 gap-4">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductGrid;
