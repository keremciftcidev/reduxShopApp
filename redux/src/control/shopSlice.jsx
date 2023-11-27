import { createSlice } from "@reduxjs/toolkit";
import shopItems from "../shopItems";

const initialState = {
  shopItems: shopItems,
  quantity: 5,
  total: 0,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.shopItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.shopItems = state.shopItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const shopItem = state.shopItems.find(
        (item) => item.id === action.payload
      );
      shopItem.quantity += 1;
    },
    decrease: (state, action) => {
        const shopItem = state.shopItems.find(
          (item) => item.id === action.payload
        );
        shopItem.quantity -= 1;
      },
      calculateTotal: (state) => {
        let total = 0 
        let quantity = 0
        state.shopItems.forEach((item) =>{
           total += item.quantity *  item.price
           quantity += item.quantity

        })
        state.quantity = quantity
        state.total=total
        
        
      }
  },
});

export const { clearCart, calculateTotal } = shopSlice.actions;
export const { removeItem ,increase,decrease} = shopSlice.actions;

export default shopSlice.reducer;
