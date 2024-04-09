import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";
import CreateCustomer from "./pages/CreateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/lldfklasdjfljsdlfjklsdjlsdfadfhslndlskldsklagsLKAKLFSKLAfklLFlkAfksaKLFAKLHFLKsklaFlHLfsafhslAl"
          element={<AdminRegister />}
        ></Route>
        <Route path="/admin_dashboard" element={<AdminDashboard />}></Route>
        <Route path="/create_customer" element={<CreateCustomer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
