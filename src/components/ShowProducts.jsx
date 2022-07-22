import React from 'react'

function ShowProducts() {
  return (
   <>
    <div className="buttons d-flex justify-content-center">
        <button className="btn btn-outline-dark">All</button>
        <button className="btn btn-outline-dark ms-2">Men Collection</button>
        <button className="btn btn-outline-dark ms-2">Women Collection</button>
        <button className="btn btn-outline-dark ms-2">Jewellary Collection</button>
        <button className="btn btn-outline-dark ms-2">Shoes</button>
    </div>
   </>
  )
}

export default ShowProducts