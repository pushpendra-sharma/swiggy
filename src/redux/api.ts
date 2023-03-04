import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BASE_URL,
  GET_ALL_RESTAURANT_URL,
  GET_RESTAURANT_DETAIL_URL,
} from '../utils/constants';
import {
  GET_RESTAURANT_DETAILS_API_RESPONSE,
  GET_RESTAURANT_LIST_API_RESPONSE,
  RESTAURANT,
  RESTAURANT_DETAILS,
} from '../utils/types';

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
    getAllRestaurants: builder.query<RESTAURANT[], void>({
      query: () => GET_ALL_RESTAURANT_URL,
      transformResponse: (response: GET_RESTAURANT_LIST_API_RESPONSE) =>
        response.data.cards[2].data.data.cards,
      transformErrorResponse: response => response,
    }),
    getRestaurantDetails: builder.query<RESTAURANT_DETAILS, string>({
      query: (id: string) => GET_RESTAURANT_DETAIL_URL + id,
      transformResponse: (response: GET_RESTAURANT_DETAILS_API_RESPONSE) =>
        response.data,
      transformErrorResponse: response => response,
    }),
  }),
});

export const { useGetAllRestaurantsQuery, useGetRestaurantDetailsQuery } =
  swiggyApi;
