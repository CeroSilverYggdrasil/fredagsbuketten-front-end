import React from "react";

function ProductCard({ product }) {
  return (
    <div key={product.id} className="border shadow-lg bg-white max-w-80 p-3">
      <div className="max-h-52 max-w-80">
        <img src={product.img_url} alt="" />
      </div>
      <div className="p-8">
        {product.name}
        <div>{product.price} kr</div>
        <div className="flex flex-wrap mt-4">
          <p className="px-4 py-2 my-2 mr-2 bg-gray-100 border-solid border-black border">
            {product.description}
          </p>
        </div>
        {
          <button
            // onClick={() => handleBuy(product)}
            className="px-4 py-2 shadow-md rounded-xl hover:bg-gray-300 hover:transition-all"
          >
            Köp
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard;
