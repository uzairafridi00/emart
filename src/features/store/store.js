import { configureStore } from '@reduxjs/toolkit'
import handleCart from '../reducers/handleCart'

export const Store = configureStore({
  reducer: {
    cart: handleCart,
  },
})