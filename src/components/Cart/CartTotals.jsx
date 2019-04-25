import React from "react";
import { Link } from "react-router-dom";
import  PayPalButton from  "./PayPalButton";
export default function CartTotals({ value,history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart  } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-5 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">
              subtotal :<strong>$ {cartSubTotal} </strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              Tax :<strong>$ {cartTax} </strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              total :<strong>$ {cartTotal} </strong>
            </span>
          </h5>
          <PayPalButton  total={cartTotal} 
          history={history}
          clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
}
