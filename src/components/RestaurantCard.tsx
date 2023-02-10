import { useState } from 'react';
import img1 from '../assets/card/img.webp';
import img2 from '../assets/card/img1.webp';

const RestaurantCard = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className='flex gap-4 items-center md:items-stretch md:w-72 md:flex-col p-4 hover:shadow-md border border-white hover:border-[#e9e9eb]'>
      <div className='w-24 h-24 relative md:w-64 md:h-40'>
        <img
          src={img2}
          alt='img'
          className='h-full rounded-md md:rounded-none'
        />
        <span className='material-symbols-outlined absolute top-1 right-1 text-white md:hidden'>
          favorite
        </span>
      </div>
      <div className='flex flex-col md:gap-2'>
        <h3 className='font-medium text-gray-ultra'>
          Aggarwal Sweets & Snacks
        </h3>
        <h3 className='hidden md:inline-block text-sm text-gray-light'>
          Bergers, Fast Food, Beverages
        </h3>
        <div className='flex md:justify-between items-center gap-2 font-semibold'>
          <div className='flex gap-[2px] items-center bg-orange-light text-white px-2 text-xs'>
            <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
              star
            </span>
            <span className='text-xs'>3.6</span>
          </div>
          <span className='text-xs text-gray-light'>•</span>
          <span className='text-xs text-gray-light'>29 mins</span>
          <span className='hidden md:inline-block text-xs text-gray-light'>
            •
          </span>
          <span className='hidden md:inline-block md:text-xs text-gray-light'>
            99 FOR TWO
          </span>
        </div>
        <h3 className='font-extralight md:hidden'>
          Bergers, Fast Food, Beverages
        </h3>
        <div className='flex gap-2 font-extralight md:hidden'>
          <span>Sector 27</span>
          <span>•</span>
          <span>3.6 km</span>
        </div>
        <span className='hidden md:inline-block text-brown text-sm border-[#e9e9eb] border-y-[1px] py-2'>
          50% off | Use WELCOME50
        </span>
        <span className='hidden md:inline-block text-cyan text-sm font-medium text-center'>
          QUICK VIEW
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
