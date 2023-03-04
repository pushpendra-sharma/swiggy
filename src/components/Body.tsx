import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Carousel, RestaurantCard, ShimmerRestaurant } from '.';
import { useGetAllRestaurantsQuery } from '../redux/api';
import Modal from './Modal';

const Body = () => {
  const [show, setShow] = useState(false);
  const { data, isLoading, error, isSuccess } = useGetAllRestaurantsQuery();

  return (
    <div className='pt-20'>
      <Carousel />
      <div className='mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
        <div className='flex flex-col gap-8 md:flex-row md:flex-wrap'>
          {isSuccess && (
            <>
              {data.map((item, index) => (
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
          {show &&
            createPortal(
              <Modal onClose={() => setShow(false)} title='' description='' />,
              document.body
            )}
        </div>
      </div>
    </div>
  );
};

export default Body;
