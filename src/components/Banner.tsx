const Banner = ({}) => {
  return (
    <div className='flex flex-col justify-evenly items-stretch px-4 my-4'>
      <div className='flex justify-between border-b-[1px] border-gray-light py-4 mb-4'>
        <div className='flex flex-col'>
          <h2 className='text-xl font-semibold text-gray-ultra mb-2 capitalize'>
            aggarwal Sweets & Snacks
          </h2>
          <h3 className='text-sm text-gray overflow-hidden text-ellipsis mb-1'>
            Desserts, Snacks, Laddoo
          </h3>
          <h3 className='text-sm text-gray overflow-hidden text-ellipsis mb-1'>
            Sector 31, 6.0km
          </h3>
        </div>
        <div className='flex flex-col justify-around p-2 border-gray-light border-[1px] rounded-md text-center shadow'>
          <div className='pb-2 text-green-dark flex justify-center items-center border-b-[1px] border-gray-light'>
            <span className='material-symbols-outlined material-symbols-fill relative bottom-1'>
              star
            </span>
            <span className='font-bold'>4.0</span>
          </div>
          <span className='text-gray text-xs'>500+ ratings</span>
        </div>
      </div>
      <div className='flex gap-8'>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined border-2 border-gray rounded-full'>
            timelapse
          </span>
          <span className='font-semibold text-gray-ultra'>32 mins</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='material-symbols-outlined border-2 border-gray rounded-full'>
            currency_rupee
          </span>
          <span className='font-semibold text-gray-ultra'>₹300 for two</span>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex flex-col justify-center p-2 border-gray-light border-[1px] shadow rounded-lg min-w-[200px] max-w-xs'>
          <span className='font-semibold text-gray'>50% OFF UPTO ₹100</span>
          <span className='text-sm text-gray-light font-medium'>
            USE TRYNEW | ABOVE ₹149
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

/**


<div className='flex flex-col grow text-white mt-4 px-12'>
        <h1 className='text-3xl'>Aggarwal Sweets & Snacks</h1>
        <div className='mt-4'>
          <h4 className='text-gray-default font-light text-sm'>
            Desserts, Snacks, laddoo
          </h4>
          <h4 className='mt-2 text-gray-default font-light text-sm'>
            Sector 71, Gautam Buddh Nagar
          </h4>
          <div className='flex flex-wrap gap-6 items-center mt-4'>
            <span className='text-lg font-semibold relative -top-0.5'>
              <i className='material-symbols-outlined relative top-0.5'>star</i>
              2.5
            </span>
            <span className='text-lg font-semibold'>23 mins</span>
            <span className='text-lg font-semibold'>₹ 500</span>
          </div>
        </div>
      </div>
      <div className='text-white border border-white grow p-4'>
        <fieldset>
          <legend>Offers</legend>
          <div className='flex flex-col gap-6 mt-4'></div>
        </fieldset>
      </div>

 */
