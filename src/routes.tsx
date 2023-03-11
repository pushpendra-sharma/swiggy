import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';
import {
  Body,
  Checkout,
  Error,
  Profile,
  RestaurantDetails,
  Search,
} from './components';

const Help = lazy(() => import('./components/Help'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'support',
        element: <Help />,
      },
      {
        path: 'account',
        element: <Profile />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetails />,
      },
    ],
  },
]);
