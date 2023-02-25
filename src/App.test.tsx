import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { render } from '@testing-library/react';
import { store } from './redux/store';
import App from './App';

test('App status to be online by default', () => {
  const app = render(
    <StaticRouter location={'/'}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const onlineApp = app.getByTestId('online-app');

  expect(onlineApp).toBeTruthy();
});
