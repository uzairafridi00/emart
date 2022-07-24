import React from "react";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="card text-bg-dark text-white border-0">
          <img
            src="/assets/images/bg.jpg"
            className="card-img img-fluid"
            alt="Background"
            height="710px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-around">
            <div className="containter">
              <h5 className="card-title display-3 fw-bolder mb-0">New SEASON ARRIVALS</h5>
              <p className="card-text lead fs-2">
               CHECKOUT ALL THE TRENDS
              </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
}

export default Home;
