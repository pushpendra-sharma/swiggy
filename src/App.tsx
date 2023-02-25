import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { useOnline } from './hooks/useOnline';
import { store } from './redux/store';

const AppLayout = () => {
  const isOnline = useOnline();
  
  if (!isOnline) {
    return (
      <Fragment>
        <div data-testid='offline-app'>
          <h1>Connection Error!</h1>
          <h2>Please check your internet connection and try again.</h2>
        </div>
      </Fragment>
    );
  }

  return (
    <div data-testid='online-app' className='flex flex-col min-h-screen'>
      <Header />
      <Outlet />
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
