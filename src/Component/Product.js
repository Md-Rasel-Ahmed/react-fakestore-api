import React from "react";
import Modal from "./Modal";

const Product = (props) => {
  //   console.log(props);
  //   console.log(props);
  const { id, title, image, description, price, category } = props.product;

  return (
    <div>
      <div className="card mb-2" style={{ width: "18rem", margin: "0 auto" }}>
        <img src={image} style={{ height: "244px" }} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 20)}</h5>
          <p className="card-text">
            {description.slice(0, 70)}
            <Modal productDetails={props.product}></Modal>
          </p>

          <div className="d-flex justify-content-between">
            <b className="text-danger">Price: ${price}</b>
            <button onClick={props.btn} className="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
