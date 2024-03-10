import React from "react";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://usercontent.one/wp/www.underbarablomster.se/wp-content/uploads/2019/08/img_hero_001.jpg')]">
      <div className="flex text-white justify-center py-72">
          <h1 className="font-bold text-6xl">Fredagsbuketten</h1>
      </div>
      <ProductGrid />
    </div>
  );
}

export default Home;
