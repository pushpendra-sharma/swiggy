import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRestaurantDetails } from '../redux/features/restaurantDetails/restaurantDetailsSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { MENU_ITEM, RESTAURANT_DETAILS } from '../utils/types';
import { Banner, Menu, ShimmerMenu, ShimmerBanner } from './';

const RestaurantDetails = () => {
  const { id = '' } = useParams();

  const { data, isLoading, error, isSuccess } = useAppSelector(
    state => state.restaurantDetails
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantDetails(id));
  }, []);

  let itemsArray: MENU_ITEM[] = [];

  if (isSuccess && data) {
    itemsArray = Object.values(data.menu.items);
  }

  return (
    <div className='pt-20 mx-0 px-0 py-2 sm:mx-4 sm:px-4 md:px-12 md:mx-12 lg:px-24 lg:mx-24 xl:px-36 xl:mx-36'>
      {isLoading && (
        <div className='flex flex-col items-stretch'>
          <ShimmerBanner />
          {Array(16)
            .fill('')
            .map((_, index) => (
              <ShimmerMenu key={index} />
            ))}
        </div>
      )}
      {isSuccess && (
        <div className='flex flex-col items-stretch'>
          <Banner {...data} />
          <span className='text-lg text-gray-dark font-semibold p-4 my-4'></span>
          {itemsArray.map(item => (
            <Menu {...item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
