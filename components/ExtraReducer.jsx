/**Source Slice */
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isLoggedIn: false },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;



/**Listner Slice*/
import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice'; // 1. Import the action from the other slice

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
  // 2. Use extraReducers to respond to external actions
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      // 3. Reset the cart state when logout happens
      state.items = [];
      state.total = 0;
      console.log("Cart cleared because user logged out!");
    });
  },
});
//export default cartSlice.reducer;
