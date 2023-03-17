import Food from '../assets/menu-img.jpg';
import { IMG_CDN_URL } from '../utils/constants';

type Props = {
  name: string;
  id: string;
  cloudinaryImageId: string;
  price: number;
  quantity: number;
  removeFromCart: () => void;
  addToCart: () => void;
};

const CartCard = ({
  name,
  id,
  cloudinaryImageId,
  price,
  quantity,
  addToCart,
  removeFromCart,
}: Props) => {
  return (
    <div
      className='max-w-[16rem] border border-white p-4 hover:border-gray-xlight'
      data-testid='cart-card'
    >
      <img
        src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : Food}
        className='aspect-video'
      />
      <h1 className='mt-4 font-bold text-ellipsis whitespace-nowrap overflow-hidden'>
        {name}
      </h1>
      <h1 className='mt-2 font-bold'>Rs: {price / 100}</h1>
      <div className='flex items-center mt-2 shadow-sm  justify-evenly'>
        <button
          className='px-2 py-2 bg-white border border-gray-xlight text-green font-bold w-full'
          onClick={removeFromCart}
          disabled={quantity < 1}
        >
          -
        </button>
        <span className='px-4 font-bold'>{quantity}</span>
        <button
          className='px-2 py-2 bg-white border border-gray-xlight text-green font-bold w-full'
          onClick={addToCart}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartCard;
