import React from "react";
import { Link } from "react-router-dom";
import HomeGrid from "../components/HomeGrid";

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
      <HomeGrid />
      <div className="flex justify-center py-6 border font-semibold border-solid w-40 bg-white m-auto hover:bg-slate-500 hover:text-white hover:transition-all rounded-xl">
        <Link to="/products">Alla Produkter</Link>
      </div>
    </div>
  );
}

export default Home;
