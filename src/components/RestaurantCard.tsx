import img1 from '../assets/card/img1.webp'

const RestaurantCard = () => {
  return (
    <div className='flex'>
      <div className='relative w-12'>
        <img src={img1} />
      </div>
      <div className='flex flex-col'></div>
    </div>
  );
};

export default RestaurantCard;
