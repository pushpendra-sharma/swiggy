import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, SEARCH_URL } from '../../../utils/constants';
import {
  SUGGESTION,
} from '../../../utils/types';

interface SearchState {
  isLoading: boolean;
  isSuccess: boolean;
  error: {};
  data: { query: string; suggestions: SUGGESTION[] }[];
}

const initialState: SearchState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: [],
};

export const fetchQueryResult = createAsyncThunk(
  `search/query`,
  async (query: string) => {
    try {
      const text = SEARCH_URL + `${query}&trackingId=undefined`;
      const resp = await fetch(BASE_URL + text);

      const json = await resp.json();

      return json.data;
    } catch (error) {
      return error;
    }
  }
);

type SearchAction = {
  payload: {
    query: string;
    suggestions: SUGGESTION[];
  };
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQueryResult.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchQueryResult.fulfilled, (state, action: SearchAction) => {
        if (action.payload) {
          const obj = {
            query: action.payload.query,
            suggestions: action.payload.suggestions,
          };
          state.data.push(obj);
        }
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchQueryResult.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { clear } = searchSlice.actions;

export default searchSlice.reducer;
