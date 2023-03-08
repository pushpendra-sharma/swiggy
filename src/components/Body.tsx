import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, RestaurantCard, ShimmerRestaurant } from '.';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchRestaurantList } from '../redux/features/restaurants/restaurantSlice';

const Body = () => {
  const {
    data: { cards },
    isLoading,
    error,
    isSuccess,
  } = useAppSelector(state => state.restaurants);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantList());
  }, []);

  return (
    <div className='my-20'>
      <Carousel />
      <div className='mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
        <div className='flex flex-col gap-8 md:flex-row md:flex-wrap'>
          {isSuccess && (
            <>
              {cards.map((item, index) => (
                <Link to={`restaurant/${item.data.id}`} key={item.data.id}>
                  <RestaurantCard data={item.data} type={item.type} />
                </Link>
              ))}
            </>
          )}
          {isLoading && (
            <>
              {Array(16)
                .fill('')
                .map((_, index) => (
                  <ShimmerRestaurant key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
