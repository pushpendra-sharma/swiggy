import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const length = Object.keys(cartItems).length;
  return (
    <div>
      <h3>Checkout page</h3>
      <p>Items in cart: {length}</p>
    </div>
  );
};

export default Checkout;
