import React, { useEffect } from "react";
import { useState } from "react";

const Modal = (props) => {
  const [modalD, setModalD] = useState([]);
  //   console.log(props.productDetails);
  const showModal = (id) => {
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setModalD(json);
      });
  };

  return (
    <div>
      {/* Button trigger modal */}
      <a
        onClick={() => showModal(props.productDetails.id)}
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Show more..
      </a>
    </div>
  );
};

export default Modal;
