import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { useOnline } from './hooks/useOnline';

const AppLayout = () => {
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <Fragment>
        <h1>Connection Error!</h1>
        <h2>Please check your internet connection and try again.</h2>
      </Fragment>
    );
  }

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
