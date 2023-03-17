import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/hooks';
import { CartCard } from './';
import { addItem, clear, removeItem } from '../redux/features/cart/cartSlice';

const Checkout = () => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36'>
      <div className='flex gap-1 justify-between m-4'>
        <span className=''>Items in cart: {cartItemsArray.length}</span>
        <button
          className='border border-orange px-4 py-1 rounded-lg bg-orange'
          onClick={() => dispatch(clear())}
        >
          Clear
        </button>
      </div>
      <div className='p-2'>
        {cartItemsArray.map(obj => {
          const { item, quantity } = obj;
          return (
            <CartCard
              name={item.name}
              id={item.id}
              cloudinaryImageId={item?.cloudinaryImageId}
              price={item.price}
              quantity={quantity}
              key={item.id}
              addToCart={() => dispatch(addItem(item))}
              removeFromCart={() => dispatch(removeItem(item))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
