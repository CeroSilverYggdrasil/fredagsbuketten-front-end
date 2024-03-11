import React from "react";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('https://usercontent.one/wp/www.underbarablomster.se/wp-content/uploads/2019/08/img_hero_001.jpg')]">
      <div className="flex text-white justify-center pt-72">
        <div>
          <h1 className="font-bold text-6xl">Fredagsbuketten</h1>
          <p className=" max-w-2xl text-lg font-semibold pt-10 pb-32">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            velit, sit maxime praesentium natus dolor reprehenderit iusto sint
            temporibus quod doloribus, enim nihil cupiditate magni laudantium
            consequatur a officiis itaque?
          </p>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
}

export default Home;
