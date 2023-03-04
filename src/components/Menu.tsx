import menuImage from '../assets/menu-img.jpg';
import { IMG_CDN_URL } from '../utils/constants';
import { MENU_ITEM } from '../utils/types';
import VegOrNonVeg from './VegOrNonVeg';

const Menu = (props: MENU_ITEM) => {
  const {
    name,
    category,
    description,
    cloudinaryImageId,
    isVeg,
    displayOrder,
    price,
  } = props;
  return (
    <div className='my-2 p-4 flex gap-8 justify-between'>
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
        <div className='p-2 z-10 relative bottom-4 w-24 bg-white shadow-md rounded text-green'>
          {true ? (
            <div className='flex justify-between font-bold'>
              <button className='text-gray'>-</button>
              <span className='mx-2'>1</span>
              <button className=''>+</button>
            </div>
          ) : (
            <div className='text-center'>ADD</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
