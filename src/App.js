import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Component/Navbar";
import Products from "./Component/Products";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar count={count}></Navbar>
      <br />
      <h1 className="text-center text-primary mt-5">All Products</h1>
      <Products count={count} setCount={setCount}></Products>
    </div>
  );
}

export default App;
