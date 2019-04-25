import React from "react";

export default function Title({ name, title }) {
  return (
   <div
   className="container-fluid"
   >
    <div className="row">
      <div className="col-sm-10 mx-auto my-2 text-center">
        <h1 className="text-capitalize font-weight-bold text-title">
          {name} <strong className="text-blue"> {title} </strong>
        </h1>
      </div>
    </div>
   </div>

  );
}
