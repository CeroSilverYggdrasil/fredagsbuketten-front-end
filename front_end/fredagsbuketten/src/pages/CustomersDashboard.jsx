import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CustomerDashboard() {
  const [customer, setCustomer] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCustomerid, setSelectedCustomerid] = useState(null);

  async function fetchCustomer() {
    try {
      const response = await fetch("http://localhost:8000/customer", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setCustomer(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCustomer();
  }, []);

  function deleteCustomerFromState(customerid) {
    const newCustomer = customer.filter(
      (customer) => customer.id !== customerid
    );
    setCustomer(newCustomer);
  }

  async function deletecustomer(customerid) {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/customer/${customerid}`,
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
      deleteCustomerFromState(customerid);
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteModalOpen(false);
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
          <Link
            to="/customer_dashboard"
            className="hover:underline hover:transition-all"
          >
            Customers
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
                  Är du säker på att du vill ta bort Kunden?
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setDeleteModalOpen(false)}
                    className="px-4 py-2 text-black bg-gray-200 rounded"
                  >
                    Avbryt
                  </button>
                  <button
                    onClick={() => deletecustomer(selectedCustomerid)}
                    className="px-4 py-2 text-white bg-red-600 rounded"
                  >
                    Radera
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="p-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <p className="mt-2 text-sm text-gray-700">
                  En lista av alla Kunder
                </p>
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
                          Namn
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Efternamn
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Stad
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Mobil Nummer
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Postkod
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {customer.map((customer) => (
                        <tr key={customer.id}>
                          <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                            {customer.first_name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.last_name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.email}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.address}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.city}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.mobile}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                            {customer.zip_code}
                          </td>
                          <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                            <button
                              onClick={() => {
                                setDeleteModalOpen(true);
                                setSelectedCustomerid(customer.id);
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

export default CustomerDashboard;
