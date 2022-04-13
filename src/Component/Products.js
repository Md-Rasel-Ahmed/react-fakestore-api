import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = (props) => {
  // console.log(props);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const cartBtn = () => {
    props.setCount(props.count + 1);
    console.log(props.count);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
              data-aos="fade-up"
              className="col-lg-4 col-md-6 col-sm-12 gap-0"
            >
              <Product
                key={product.id}
                product={product}
                btn={cartBtn}
              ></Product>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
