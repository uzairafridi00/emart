import { configureStore } from '@reduxjs/toolkit'
import handleCart from '../reducers/handleCart'

export const store = configureStore({
  reducer: {
    cart: handleCart,
  },
})