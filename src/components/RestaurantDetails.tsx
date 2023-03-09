import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addItem, removeItem } from '../redux/features/cart/cartSlice';
import { fetchRestaurantDetails } from '../redux/features/restaurantDetails/restaurantDetailsSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { MENU_ITEM } from '../utils/types';
import { Banner, Menu, ShimmerMenu, ShimmerBanner } from './';

const RestaurantDetails = () => {
  const { id = '' } = useParams();

  const { data, isLoading, error, isSuccess } = useAppSelector(
    state => state.restaurantDetails
  );

  const [menuItems, seMenuItems] = useState<MENU_ITEM[]>([]);
  const dispatch = useAppDispatch();

  const fetchDetails = (id: string) => {
    dispatch(fetchRestaurantDetails(id));

    if (isSuccess && data) {
      seMenuItems(Object.values(data.menu.items));
    }
  };

  useEffect(() => {
    fetchDetails(id);
  }, []);

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
          {menuItems.map(item => (
            <Menu
              {...item}
              key={item.id}
              addToCart={() => dispatch(addItem(item))}
              removeFromCart={() => dispatch(removeItem(item))}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
