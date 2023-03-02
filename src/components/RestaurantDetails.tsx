import { useParams } from 'react-router';
import { Banner, Menu } from './';
import details from '../mocks/get.restaurantDetails.json'

const RestaurantDetails = () => {
  const { id } = useParams();



  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36'>
      <div className='flex flex-col items-stretch'>
        <Banner />
        <span className='text-lg text-gray-dark font-semibold p-4 my-4'>
          Super Saver Combos (23)
        </span>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </div>
    </div>
  );
};

export default RestaurantDetails;
