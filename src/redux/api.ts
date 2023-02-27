import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BASE_URL,
  GET_ALL_RESTAURANT_URL,
  GET_RESTAURANT_DETAIL_URL,
} from '../utils/constants';

export interface Response {
  statusCode: number;
  data: {
    cards: Array<Restaurant>;
  };
}
export interface Restaurant {
  id: string;
  name: string;
  city: string;
  area: string;
  avgRating: number;
  avgRatingString: string;
  costForTwo: number;
  costForTwoMsg: string;
  cusisines: string[];
  isVeg: boolean;
  cloudinaryImageId: string;
}

export const swiggyApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: 10000,
    prepareHeaders: headers => {
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllRestaurants: builder.query<[], void>({
      query: () => GET_ALL_RESTAURANT_URL,
      transformResponse: response => response.data.cards[2].data.data.cards,
      transformErrorResponse: response => response,
    }),
    getRestaurantDetails: builder.query<Restaurant, string>({
      query: (id: string) => GET_RESTAURANT_DETAIL_URL + id,
      transformResponse: response => response.data,
      transformErrorResponse: response => response,
    }),
  }),
});

export const { useGetAllRestaurantsQuery, useGetRestaurantDetailsQuery } =
  swiggyApi;
