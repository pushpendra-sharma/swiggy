import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, GET_ALL_RESTAURANT_URL } from '../../../utils/constants';
import { CARD } from '../../../utils/types';

interface AppState {
  location: Object;
  profile: Object;
}

const initialState: AppState = {
  location: {},
  profile: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = appSlice.actions;

export default appSlice.reducer;
