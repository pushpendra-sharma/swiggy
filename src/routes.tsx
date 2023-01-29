import { createBrowserRouter } from 'react-router-dom';
import AppLayout, { appLoader } from './App';
import {
  Address,
  Body,
  Checkout,
  Error,
  Help,
  Offers,
  Profile,
  Search,
} from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
        path: 'address',
        element: <Address />,
      },
      {
        path: 'offers',
        element: <Offers />,
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
    ],
  },
]);
