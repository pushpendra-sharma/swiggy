import menuImage from '../assets/menu-img.jpg';
import { addItem, removeItem } from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IMG_CDN_URL } from '../utils/constants';
import { MENU_ITEM } from '../utils/types';
import VegOrNonVeg from './VegOrNonVeg';

interface Props extends MENU_ITEM {
  removeFromCart: () => void;
  addToCart: () => void;
}

const Menu = (props: Props) => {
  const {
    id,
    name,
    category,
    description,
    cloudinaryImageId,
    isVeg,
    displayOrder,
    price,
    addToCart,
    removeFromCart,
  } = props;

  const cartItems = useAppSelector(state => state.cart.items);
  const quantityInCart = cartItems[id]?.quantity;

  return (
    <div className=' px-4 py-8 flex gap-8 justify-between border-t border-gray-light'>
      <div className='flex flex-col gap-1'>
        <VegOrNonVeg isVeg={isVeg ? true : false} />
        <p className='text-gray-medium font-medium'>{name}</p>
        <p className='text-sm text-gray'>₹{price / 100}</p>
      </div>
      <div className='w-32 flex flex-col gap-0 items-center'>
        <img
          src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : menuImage}
          alt='menu-img'
          className='rounded-md w-full'
        />
        <div className='relative bottom-4 w-24 bg-white shadow-md rounded text-green'>
          {quantityInCart > 0 ? (
            <div className='flex justify-between font-bold w-full'>
              <button className='text-gray py-2 px-4' onClick={removeFromCart}>
                -
              </button>
              <span className='py-2'>{quantityInCart}</span>
              <button className='py-2 px-4' onClick={addToCart}>
                +
              </button>
            </div>
          ) : (
            <button className='text-center w-full p-2' onClick={addToCart}>
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
