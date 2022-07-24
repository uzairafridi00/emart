import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShowProducts(props) {
  const [filter, setFilter] = useState(props.data);

  const filterProduct = (cat) => {
    const updatedList = props.data.filter((x) => x.category === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };

  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilter(props.data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men Collection
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women Collection
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewellary Collection
        </button>
        <button
          className="btn btn-outline-dark ms-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>

      {filter.map((product) => (
        <div
          key={product.id}
          className="card ms-4"
          style={{ width: "18rem", cursor: "pointer", margin: "10px 0" }}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0, 12)}</h5>
            <p className="card-text lead fw-bold">{`Price: ${product.price}`}</p>
            <Link
              to={"/products/" + product.id}
              className="btn btn-outline-dark"
            >
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowProducts;
