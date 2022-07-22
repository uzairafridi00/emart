import React from "react";

function Home() {
  return (
    <>
      <div className="hero">
        <div class="card text-bg-dark text-white border-0">
          <img
            src="/assets/images/bg.jpg"
            class="card-img"
            alt="Background"
            height="710px"
          />
          <div class="card-img-overlay d-flex flex-column justify-content-around">
            <div className="containter">
              <h5 class="card-title display-3 fw-bolder mb-0">New SEASON ARRIVALS</h5>
              <p class="card-text lead fs-2">
               CHECKOUT ALL THE TRENDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
