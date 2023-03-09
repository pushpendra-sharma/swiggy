import { configureStore } from '@reduxjs/toolkit';
import appSlice from './features/app/appSlice';
import cartSlice from './features/cart/cartSlice';
import restaurantSlice from './features/restaurants/restaurantSlice';
import restaurantDetailsSlice from './features/restaurantDetails/restaurantDetailsSlice';
import searchSlice from './features/search/searchSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    restaurants: restaurantSlice,
    restaurantDetails: restaurantDetailsSlice,
    search: searchSlice,
  },
});

export type Action = { type: string; payload: any };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
