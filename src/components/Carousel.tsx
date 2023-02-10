import img1 from '../assets/carousel/img1.jpeg';
import img2 from '../assets/carousel/img2.webp';
import img3 from '../assets/carousel/img3.webp';
import img4 from '../assets/carousel/img4.webp';
import img5 from '../assets/carousel/img5.webp';
import img6 from '../assets/carousel/img6.webp';

const Carousel = () => {
  return (
    <div className='hidden lg:flex items-center bg-gray-dark mx-0 py-12 lg:px-28'>
      <div className='relative h-64 max-w-full'>
        <div className='relative w-full'>
          <div className='overflow-hidden'>
            <div className='w-full transition-transform ease-in whitespace-nowrap'>
              <div className='inline-block w-64 mr-12'>
                <img src={img1} alt='' className='w-full' />
              </div>
              <div className='inline-block w-64 mr-12'>
                <img src={img2} alt='' className='w-full' />
              </div>
              <div className='inline-block w-64 mr-12'>
                <img src={img3} alt='' className='w-full' />
              </div>
              <div className='inline-block w-64 mr-12'>
                <img src={img4} alt='' className='w-full' />
              </div>
              <div className='inline-block w-64 mr-12'>
                <img src={img5} alt='' className='w-full' />
              </div>
              <div className='inline-block w-64 mr-12'>
                <img src={img6} alt='' className='w-full' />
              </div>
              {/* <span className='material-symbols-outlined'>arrow_forward_ios</span> */}
            </div>
          </div>
        </div>
        {/* <span className='material-symbols-outlined'>arrow_back_ios</span> */}
      </div>
    </div>
  );
};
export default Carousel;
