// For Adding Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}


// For Delete Item From Cart
export const deleteCart = (product) => {
    return{
        type: "DELETEITEM",
        payload: product
    }
}