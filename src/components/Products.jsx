import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import ShowProducts from "./ShowProducts";

function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (

    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">
            Latest Products
          </h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts data={data}/>}
      </div>

</div> 

    // Seperate Components have been made for ShowProducts and Loading 

    // <div className="products-container">
    //   {loading && (
    //     <div>
    //       <h1>Loading...</h1>
    //     </div>
    //   )}

    //   {data.map((product) => (
    //     <div key={product.id} className="card" style={{width: "18rem"}}>
    //       <img src={product.image} className="card-img-top" alt="..." />
    //       <div className="card-body">
    //         <h5 className="card-title">{product.title}</h5>
    //         <p className="card-text">{product.category}</p>
    //         <a
    //           href="#"
    //           className="btn btn-primary"
    //         >{`Price: ${product.price}`}</a>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Products;
