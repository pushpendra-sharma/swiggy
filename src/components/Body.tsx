import Carousel from './Carousel';
import Filters from './Filters';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className='pt-20'>
      <Carousel />
      <div className='mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
        <Filters />
        <div className=''>
          <RestaurantCard />
        </div>
      </div>
    </div>
  );
};

export default Body;
