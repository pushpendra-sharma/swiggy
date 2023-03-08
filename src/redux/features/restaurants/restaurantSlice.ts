import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, GET_ALL_RESTAURANT_URL } from '../../../utils/constants';
import { CARD, GET_RESTAURANT_LIST_API_RESPONSE } from '../../../utils/types';
import { Action } from '../../store';

interface RestaurantState {
  isLoading: boolean;
  isSuccess: boolean;
  error: {};
  data: {
    totalRestaurants: number;
    cards: CARD[];
  };
}

const initialState: RestaurantState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: {
    totalRestaurants: 0,
    cards: [],
  },
};

export const fetchRestaurantList = createAsyncThunk(
  `restaurants/fetchAll`,
  async () => {
    try {
      const resp = await fetch(BASE_URL + GET_ALL_RESTAURANT_URL);

      const json: GET_RESTAURANT_LIST_API_RESPONSE = await resp.json();
      const allRestaurants = json.data.cards.find(
        card => card.cardType === 'seeAllRestaurants'
      );

      return allRestaurants && allRestaurants.data.data;
    } catch (error) {
      return error;
    }
  }
);

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurantList.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRestaurantList.fulfilled, (state, action: Action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchRestaurantList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { clear } = restaurantSlice.actions;

export default restaurantSlice.reducer;
