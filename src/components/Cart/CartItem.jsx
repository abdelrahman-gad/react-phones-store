import React from "react";

export default function CartItem({ item, value }) {
  const { id, img, price, title, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="container-fluid">
    <div className="row my-2 text-center text-capitalize mt-5">
      <div className="col-10 mx-auto col-lg-2 ">
        <img
          src={img}
          style={{ width: "5rem", hight: "5rem" }}
          alt="product cart img"
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 py-1">
        <span className="d-lg-none"> product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 py-1">
        <span className="d-lg-none"> price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 py-1">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1 cart-icon"
            onClick={() => decrement(id)}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1 cart-icon"
            onClick={() => increment(id)}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 py-1">
        <span className="d-lg-none"> item total : </span>
       $ {total}
      </div>
    </div>
    </div>
  );
}
