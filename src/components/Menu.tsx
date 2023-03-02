import menuImage from '../assets/menu-img.jpg';
import VegOrNonVeg from './VegOrNonVeg';

const Menu = () => {
  return (
    <div className='my-2 p-4 flex gap-8 justify-between'>
      <div className='flex flex-col gap-1'>
        <VegOrNonVeg isVeg={true} />
        <p className='text-gray-medium font-medium'>
          2 Classic Veg Burger + Classic Fries + Any Milkshake
        </p>
        <p className='text-sm text-gray'>₹300</p>
      </div>
      <div className='w-32 flex flex-col gap-0 items-center'>
        <img src={menuImage} alt='menu-img' className='rounded-md w-full' />
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
