import mockImg from '../assets/card/img1.webp';
import { IMG_CDN_URL } from '../utils/constants';
import { CARD } from '../utils/types';
import Rating from './Rating';

const RestaurantCard = ({
  type,
  data: {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    lastMileTravelString,
    slaString,
    costForTwoString,
    locality,
    areaSlug,
    aggregatedDiscountInfo,
    promoted,
  },
}: CARD) => {
  return (
    <div
      id='restaurant'
      className='flex gap-4 items-center md:items-stretch md:w-72 md:flex-col p-4 hover:shadow-md border border-white hover:border-[#d3d5df]'
    >
      <div className='w-24 h-24 relative md:w-64 md:h-40'>
        <img
          src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : mockImg}
          alt='restaurant-img'
          className='w-[88px] h-24 md:h-full md:w-full rounded-md md:rounded-none'
        />
        <span className='material-symbols-outlined absolute top-1 right-2 text-white md:hidden'>
          favorite
        </span>
        {promoted && (
          <>
            <div className='hidden md:block bg-gray-medium text-white font-medium text-xs absolute top-0 left-[-8px] py-1 px-2 truncate'>
              PROMOTED
            </div>
            <div className='hidden md:block w-3 h-3 absolute bg-gray-ultra top-[18px] left-[-6px] rotate-45 -z-10' />
          </>
        )}
      </div>
      <div className='flex flex-col md:gap-1'>
        <div className='font-semibold md:font-medium text-gray-ultra text-[15px] md:text-[17px] truncate w-36 md:w-full'>
          {name}
        </div>
        <div className='hidden md:inline-block text-[13px] text-gray-light font-light'>
          {cuisines.join(', ')}
        </div>
        <div className='flex md:justify-between items-center gap-2 font-semibold mt-1 md:mt-3.5'>
          <Rating rating={avgRating} />
          <span className='text-xs text-gray-light'>•</span>
          <span className='text-xs text-gray-light capitalize'>
            {slaString}
          </span>
          <span className='hidden md:inline-block text-xs text-gray-light'>
            •
          </span>
          <span className='hidden md:inline-block text-xs text-gray-light'>
            {costForTwoString}
          </span>
        </div>
        <div className='w-36 font-extralight text-[13px] text-gray-light truncate overflow-hidden md:hidden mt-0.5'>
          {cuisines.join(', ')}
        </div>
        <div className='flex gap-1 md:gap-2 font-extralight text-gray-light text-xs md:hidden'>
          <span>{locality || areaSlug}</span>
          <span>•</span>
          <span>{lastMileTravelString}</span>
        </div>
        <div className='hidden md:block text-brown text-sm border-[#e9e9eb] border-t pt-3.5 mt-3.5'>
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </div>
        <div className='quick hidden md:block text-cyan text-[13px] font-semibold text-center border-[#e9e9eb] border-t pt-3.5 mt-3'>
          QUICK VIEW
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
