import { BANNER_DETAILS } from '../utils/types';

const Banner = (props: BANNER_DETAILS) => {
  const {
    name,
    city,
    area,
    areaSlug,
    avgRating,
    avgRatingString,
    totalRatings,
    totalRatingsString,
    costForTwo,
    costForTwoMsg,
    cuisines,
    address,
    locality,
    sla: { slaString, lastMileDistanceString },
    offerMeta,
  } = props;
  return (
    <div className='flex flex-col justify-evenly items-stretch px-4 my-4'>
      <div className='flex justify-between border-b-[1px] border-gray-light py-4 mb-4'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold text-gray-ultra mb-2 capitalize'>
            {name}
          </h2>
          <h3 className='text-sm text-gray overflow-hidden text-ellipsis mb-1'>
            {cuisines.join(', ')}
          </h3>
          <div className='text-sm text-gray overflow-hidden text-ellipsis mb-1'>
            {locality + ', ' + lastMileDistanceString}
          </div>
        </div>
        <div className='flex flex-col justify-around p-2 border-gray-light border-[1px] rounded-md text-center shadow'>
          <div className='pb-2 text-green-dark flex justify-center items-center border-b-[1px] border-gray-light'>
            <span className='material-symbols-outlined material-symbols-fill relative bottom-1'>
              star
            </span>
            <span className='font-bold'>{avgRatingString}</span>
          </div>
          <span className='text-gray text-xs'>{totalRatingsString}</span>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined border-2 border-gray rounded-full'>
            timelapse
          </span>
          <span className='font-semibold text-gray-ultra'>{slaString}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined border-2 border-gray rounded-full'>
            currency_rupee
          </span>
          <span className='font-semibold text-gray-ultra'>{costForTwoMsg}</span>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex flex-col justify-center p-2 border-gray-light border-[1px] shadow rounded-lg min-w-[200px] max-w-xs'>
          <span className='font-semibold text-gray'>{offerMeta[0].header}</span>
          <span className='text-sm text-gray-light font-medium'>
            {offerMeta[0].coupon_code + ' | ' + offerMeta[0].description}
          </span>
        </div>
      </div>
      <div className='py-4 border-b-[1px] border-gray-light'>
        <span className='font-semibold text-gray-dark mr-2'>Veg only</span>
        <input type='checkbox' className='font-semibold text-gray-dark'></input>
      </div>
    </div>
  );
};

export default Banner;
