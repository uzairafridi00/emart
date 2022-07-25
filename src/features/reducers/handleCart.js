import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cart = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDITEM: (state, action) => {
      const product = action.payload;
      // Check if the Product is Already exist
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) => {
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x;
        });
      } else {
        const product = action.payload
        return  [
            ...state,
            {
                ...product,
                quantity: 1,
            }
        ]
      }
    },

    DELETEITEM: (state, action) => {
        const exist1 = state.find((x) => x.id === product.id)

        if(exist1.quantity === 1) {
            return state.filter((x) => x.id !== exist1.id)
        } else {
            return state.map((x)=> x.id === product.id ? {...x, quantity: x.quantity-1}: x)
        }
    }
  },
});

// Action creators are generated for each case reducer function
export const { ADDITEM } = cartSlice.actions;

export default cartSlice.reducer;
