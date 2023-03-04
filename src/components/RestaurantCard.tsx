import { IMG_CDN_URL } from '../utils/constants';
import { CARD, RESTAURANT } from '../utils/types';
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
    aggregatedDiscountInfo,
  },
}: CARD) => {
  return (
    <div className='flex gap-4 items-center md:items-stretch md:w-72 md:flex-col p-4 hover:shadow-md border border-white hover:border-[#e9e9eb]'>
      <div className='w-24 h-24 relative md:w-64 md:h-40'>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt='restaurant-img'
          className='h-full rounded-md md:rounded-none'
        />
        <span className='material-symbols-outlined absolute top-1 right-1 text-white md:hidden'>
          favorite
        </span>
      </div>
      <div className='flex flex-col md:gap-2'>
        <h3 className='font-medium text-gray-ultra'>{name}</h3>
        <div className='hidden md:inline-block text-[13px] text-gray-light'>
          {cuisines.join(', ')}
        </div>
        <div className='flex md:justify-between items-center gap-2 font-semibold'>
          <Rating rating={avgRating} />
          <span className='text-xs text-gray-light'>•</span>
          <span className='text-xs text-gray-light capitalize'>
            {slaString}
          </span>
          <span className='hidden md:inline-block text-xs text-gray-light'>
            •
          </span>
          <span className='hidden md:inline-block md:text-xs text-gray-light'>
            {costForTwoString}
          </span>
        </div>
        <h3 className='font-extralight md:hidden'>{cuisines.toString()}</h3>
        <div className='flex gap-2 font-extralight md:hidden'>
          <span>{locality}</span>
          <span>•</span>
          <span>{lastMileTravelString}</span>
        </div>
        <span className='hidden md:inline-block text-brown text-sm border-[#e9e9eb] border-y-[1px] py-2'>
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </span>
        <span className='hidden md:inline-block text-cyan text-sm font-medium text-center'>
          QUICK VIEW
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
