import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, GET_ALL_RESTAURANT_URL } from '../../../utils/constants';
import { CARD } from '../../../utils/types';

interface AppState {
  location: Object;
  profile: Object;
  isModalOpen: boolean;
}

const initialState: AppState = {
  location: {},
  profile: {},
  isModalOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    closeModal: state => {
      state.isModalOpen = false;
    },
    openModal: state => {
      state.isModalOpen = true;
    },
  },
});

export const { closeModal, openModal, setLocation } = appSlice.actions;

export default appSlice.reducer;
