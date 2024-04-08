import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Add product form
  const [showAddModal, setShowAddModal] = useState(false);
  // Form variables
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");

  const [urlName, setUrlName] = useState("");

  const [priceError, setPriceError] = useState("");
  const [price, setPrice] = useState("");

  const [type, setType] = useState("");

  const [description, setDescription] = useState("");

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:8000/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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

  function deleteProductFromState(productId) {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }

  async function deleteProduct(productId) {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      deleteProductFromState(productId);
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteModalOpen(false);
    }
  }

  function validateForm() {
    let isValid = true;
    // Reset error messages
    setProductNameError("");
    setPriceError("");

    // Name validation
    if (!productName.trim()) {
      setProductNameError("Du måste skriva ett namn på kursen");
      isValid = false;
    }
    if (price < 0) {
      setPriceError("Poängen måste vara över 0");
      isValid = false;
    }

    return isValid;
  }

  async function addProductsubmit(e) {
    e.preventDefault();

    let isValid = validateForm();
    if (isValid === false) {
      return;
    }
    const data = JSON.stringify({
      name: productName,
      price: price ? parseInt(price, 10) : null, // Ensure price is an integer or null
      img_url: urlName || null,
      type_id: type || null,
      description,
    });
    try {
      const response = await fetch("http://localhost:8000/admin/products", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data2 = await response.json();
      if (!response.ok) {
        console.log(data2);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (response.status == 402) {
        setServerErrorMessage("Failed to add product");
      }

      // Handle success - you might want to close the modal and refresh the Products list
      setShowAddModal(false);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  }

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
          <Link
            to="/admin_dashboard"
            className="hover:underline hover:transition-all"
          >
            Dashboard
          </Link>
        </div>
      </header>
      <div className="min-w-xl">
        <div className="min-h-screen my-8 bg-white border shadow-md">
          {/* DELETE MODAL START */}
          {deleteModalOpen && (
            <div className="fixed inset-0 z-50 flex overflow-auto bg-gray-800 bg-opacity-50">
              <div className="relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Bekräfta borttagning</h2>
                <p className="my-4">
                  Är du säker på att du vill ta bort Producten?
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setDeleteModalOpen(false)}
                    className="px-4 py-2 text-black bg-gray-200 rounded"
                  >
                    Avbryt
                  </button>
                  <button
                    onClick={() => deleteProduct(selectedProductId)}
                    className="px-4 py-2 text-white bg-red-600 rounded"
                  >
                    Radera
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* ADD product MODAL START */}
          {showAddModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
              <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:w-1/2">
                <form
                  className="px-4 py-6 sm:p-8"
                  onSubmit={addProductsubmit}
                  noValidate
                >
                  <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* product Name */}
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="product-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Product Namn
                      </label>
                      <div className="mt-2">
                        <input
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          type="text"
                          name="name"
                          id="product-name"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      {productNameError && (
                        <div className="text-red-700">
                          Du måste ha ett Product Namn
                        </div>
                      )}
                    </div>
                    {/* price */}
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="number"
                          name="price"
                          id="price"
                          min="0"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    {/* Start Date */}
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="start-date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Bild Url
                      </label>
                      <div className="mt-2">
                        <input
                          value={urlName}
                          onChange={(e) => setUrlName(e.target.value)}
                          type="text"
                          name="url"
                          id="img-url"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    {/* End Date */}
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="end-date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Type Id
                      </label>
                      <div className="mt-2">
                        <input
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          type="number"
                          name="type_id"
                          id="type_id"
                          min="0"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    {/* Description */}
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Kursbeskrivning
                      </label>
                      <div className="mt-2">
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          name="description"
                          id="description"
                          rows="5"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-gray-900"
                      onClick={() => setShowAddModal(false)}
                    >
                      Stäng
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Skapa
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {/* ADD product MODAL END */}
          <div className="p-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <p className="mt-2 text-sm text-gray-700">
                  En lista av alla dina products
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  onClick={() => setShowAddModal(true)}
                  type="button"
                  className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Skapa Product
                </button>
              </div>
            </div>
            <div className="flow-root mt-8">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Product Namn
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Pris
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Type Id
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Bild
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                            {product.name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {product.price}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {product.type_id}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            <img src={product.img_url} alt="" />
                          </td>
                          <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                            <button
                              onClick={() => {
                                setDeleteModalOpen(true);
                                setSelectedProductId(product.id);
                              }}
                              className="ml-8 text-red-700 hover:text-red-900"
                            >
                              Radera
                              <span className="sr-only"></span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
