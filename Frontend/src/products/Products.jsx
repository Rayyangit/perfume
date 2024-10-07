import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Product from "../components/Product";
function Products() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
       <Product />
      </div>
      <Footer />
    </>
  );
}

export default Products;
