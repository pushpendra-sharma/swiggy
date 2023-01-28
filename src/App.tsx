import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';

const AppLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default AppLayout;

export const appLoader = () => <h1>App loading...</h1>;
