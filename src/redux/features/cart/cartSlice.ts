import { createSlice } from '@reduxjs/toolkit';
import { ObjectType } from 'typescript';
import { MENU_ITEM } from '../../../utils/types';

interface CartState {
  items: {
    [propName: string]: { quantity: number; item: MENU_ITEM };
  };
}

const initialState: CartState = {
  items: {},
};

type Action = {
  type: string;
  payload: MENU_ITEM;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: Action) => {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 0) {
        state.items[id].quantity += 1;
      } else
        state.items[id] = {
          quantity: 1,
          item: action.payload,
        };
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
      } else {
        delete state.items[id];
      }
    },
    clear: state => {
      state.items = {};
    },
  },
});

export const { addItem, clear, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
