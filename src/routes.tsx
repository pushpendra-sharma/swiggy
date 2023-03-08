import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';
import {
  Body,
  Checkout,
  Error,
  Help,
  Profile,
  RestaurantDetails,
  Search,
} from './components';

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
