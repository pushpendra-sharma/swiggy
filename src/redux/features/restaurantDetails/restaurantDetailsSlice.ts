import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, GET_RESTAURANT_DETAIL_URL } from '../../../utils/constants';
import {
  GET_RESTAURANT_DETAILS_API_RESPONSE,
  RESTAURANT_DETAILS,
} from '../../../utils/types';
import { Action, AppDispatch, RootState } from '../../store';

interface MyKnownError {
  errorMessage: string;
}

interface RestaurantDetailsState {
  isLoading: boolean;
  isSuccess: boolean;
  error: {};
  data: RESTAURANT_DETAILS;
}

const initialState: RestaurantDetailsState = {
  isLoading: false,
  isSuccess: false,
  error: {},
  data: {
    id: '',
    name: '',
    city: '',
    area: '',
    avgRating: '',
    avgRatingString: '',
    totalRatings: '',
    totalRatingsString: '',
    costForTwo: 0,
    costForTwoMsg: '',
    costForTwoString: '',
    cuisines: [''],
    veg: false,
    cloudinaryImageId: '',
    address: '',
    locality: '',
    deliveryTime: 0,
    slaString: '',
    lastMileTravel: 0,
    lastMileTravelString: '',
    aggregatedDiscountInfo: {
      header: '',
      shortDescriptionList: [{ meta: '', discountType: '', operationType: '' }],
    },
    areaSlug: '',
    promoted: false,
    offerMeta: [],
    sla: {
      deliveryTime: 0,
      lastMileDistanceString: '',
      slaString: '',
    },
    menu: {
      items: {},
      widgets: [
        {
          name: '',
          subTitle: '',
          type: '',
          entities: [
            {
              id: 0,
              type: '',
              showImg: false,
              showRibbon: false,
            },
          ],
        },
      ],
    },
  },
};

export const fetchRestaurantDetails = createAsyncThunk(
  `restaurantDetails/fetchById`,
  async (id: string) => {
    try {
      const resp = await fetch(BASE_URL + GET_RESTAURANT_DETAIL_URL + id);
      const res: GET_RESTAURANT_DETAILS_API_RESPONSE = await resp.json();

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

export const restaurantDetailsSlice = createSlice({
  name: 'restaurantDetails',
  initialState,
  reducers: {
    clear: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurantDetails.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRestaurantDetails.fulfilled, (state, action: Action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchRestaurantDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {};
      });
  },
});

export const { clear } = restaurantDetailsSlice.actions;

export default restaurantDetailsSlice.reducer;
