import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { store } from '../../redux/store';
import Footer from '../Footer';

test('Footer', () => {
  const footer = render(
    <StaticRouter location={'/'}>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
});
