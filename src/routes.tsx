import { createBrowserRouter } from 'react-router-dom';
import AppLayout, { appLoader } from './App';
import { Body } from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    loader: appLoader,
    errorElement: <h1>Some error</h1>,
    children: [
      {
        path: '/',
        element: <Body />,
      },
    ],
  },
]);
