import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartState {
  items: Array<Object>;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { clear } = cartSlice.actions;

export default cartSlice.reducer;
