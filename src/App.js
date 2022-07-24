import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
import PageNotFound from "./components/errors/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
