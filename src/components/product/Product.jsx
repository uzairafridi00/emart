import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import Skeleton from "react-loading-skeleton";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/" + id,
    })
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [id]);

  // Loading SEKELTON
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={70} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  // SHOW PRODUCT
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6" style={{ cursor: "pointer" }}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <Link to="" className="btn btn-outline-dark ms-2 px-3 py-2">
            Add to Cart
          </Link>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
}

export default Product;
