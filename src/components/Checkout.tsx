import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h3>Checkout page</h3>
      <p>Items in cart: {cartItems.length}</p>
    </div>
  );
};

export default Checkout;
