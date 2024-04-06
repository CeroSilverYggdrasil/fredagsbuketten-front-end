import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "T-Shirt 1",
    price: 19.99,
    description:
      "BLABALBSKdlnskladkslad kshaklflahdlsakldnkslandkl sakflnaklfkslandklshadklsnaklds nakldnkslandklsandkslandkl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 2,
    name: "T-Shirt 2",
    price: 24.99,
    description:
      "sjaklfkslahdksnakf lsnaklndklsnakl dnsklafnksofdsnfldnsklfnsl andlsnkadlskaldnksalndklas",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 3,
    name: "T-Shirt 3",
    price: 69.99,
    description:
      "ashdklsjklfbhdjlas fbjlasdjlsnlandlksaklfnakld fnsklanfklandklsnkdlsaklfnsak lfnsklanfklsaksfklsafakl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 4,
    name: "T-Shirt 1",
    price: 19.99,
    description:
      "BLABALBSKdlnskladkslad kshaklflahdlsakldnkslandkl sakflnaklfkslandklshadklsnaklds nakldnkslandklsandkslandkl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 5,
    name: "T-Shirt 2",
    price: 24.99,
    description:
      "sjaklfkslahdksnakf lsnaklndklsnakl dnsklafnksofdsnfldnsklfnsl andlsnkadlskaldnksalndklas",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 6,
    name: "T-Shirt 3",
    price: 69.99,
    description:
      "ashdklsjklfbhdjlas fbjlasdjlsnlandlksaklfnakld fnsklanfklandklsnkdlsaklfnsak lfnsklanfklsaksfklsafakl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 7,
    name: "T-Shirt 1",
    price: 19.99,
    description:
      "BLABALBSKdlnskladkslad kshaklflahdlsakldnkslandkl sakflnaklfkslandklshadklsnaklds nakldnkslandklsandkslandkl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 8,
    name: "T-Shirt 2",
    price: 24.99,
    description:
      "sjaklfkslahdksnakf lsnaklndklsnakl dnsklafnksofdsnfldnsklfnsl andlsnkadlskaldnksalndklas",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 4,
    name: "T-Shirt 1",
    price: 19.99,
    description:
      "BLABALBSKdlnskladkslad kshaklflahdlsakldnkslandkl sakflnaklfkslandklshadklsnaklds nakldnkslandklsandkslandkl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 5,
    name: "T-Shirt 2",
    price: 24.99,
    description:
      "sjaklfkslahdksnakf lsnaklndklsnakl dnsklafnksofdsnfldnsklfnsl andlsnkadlskaldnksalndklas",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 6,
    name: "T-Shirt 3",
    price: 69.99,
    description:
      "ashdklsjklfbhdjlas fbjlasdjlsnlandlksaklfnakld fnsklanfklandklsnkdlsaklfnsak lfnsklanfklsaksfklsafakl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 7,
    name: "T-Shirt 1",
    price: 19.99,
    description:
      "BLABALBSKdlnskladkslad kshaklflahdlsakldnkslandkl sakflnaklfkslandklshadklsnaklds nakldnkslandklsandkslandkl",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  {
    id: 8,
    name: "T-Shirt 2",
    price: 24.99,
    description:
      "sjaklfkslahdksnakf lsnaklndklsnakl dnsklafnksofdsnfldnsklfnsl andlsnkadlskaldnksalndklas",
    type_id: 1,
    imageUrl: "https://www.pexels.com/photo/2559941/download/", // Placeholder for direct image URL
  },
  // Add more products as needed
];

const size = 8;
const ProductList = products.slice(0, size);

function HomeGrid() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 font-semibold m-auto p-2 gap-4">
      {ProductList.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default HomeGrid;
