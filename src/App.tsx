import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { useOnline } from './hooks/useOnline';
import { store } from './redux/store';

const AppLayout = () => {
  const isOnline = useOnline();

  return (
    <div
      data-testid={isOnline ? `online-app` : `offline-app`}
      className='flex flex-col min-h-screen'
    >
      <Header />
      {isOnline ? (
        <Outlet />
      ) : (
        <div className='mx-0 px-4 py-20 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
          <h1>Connection Error!</h1>
          <h2>Please check your internet connection and try again.</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;

export const appLoader = () => <h1>App loading...</h1>;
