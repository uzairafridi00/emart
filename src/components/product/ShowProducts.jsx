import React from "react";

function ShowProducts(props) {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark">All</button>
        <button className="btn btn-outline-dark ms-2">Men Collection</button>
        <button className="btn btn-outline-dark ms-2">Women Collection</button>
        <button className="btn btn-outline-dark ms-2">
          Jewellary Collection
        </button>
        <button className="btn btn-outline-dark ms-2">Electronics</button>
      </div>

      {props.data.map((product) => (
        <div key={product.id} className="card ms-4" style={{width: "18rem"}}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.category}</p>
            <a
              href="#"
              className="btn btn-primary"
            >{`Price: ${product.price}`}</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowProducts;
