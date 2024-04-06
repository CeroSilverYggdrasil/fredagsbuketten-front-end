import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/ReGiStEr" element={<AdminRegister />}></Route>
          <Route path="/admin_dashboard" element={<AdminDashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
