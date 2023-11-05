import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddCartToStore: (state,data) => {
      state.cart.push(data.payload)
    },
    DeleteCartFromStore: (state) => {
     state.cart -= 1
    }
  },
})


export const { AddCartToStore, DeleteCartFromStore} = cartSlice.actions

export default cartSlice.reducer