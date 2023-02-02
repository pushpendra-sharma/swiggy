import instagram from '../assets/instagram.webp';
import twitter from '../assets/twitter.webp';
import facebook from '../assets/facebook.webp';
import pintrest from '../assets/pintrest.webp';
import footer from '../assets/footer.webp';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-black pt-12 px-12'>
      <div className='md:mx-32 sm:mx-0 flex flex-col'>
        <div className='flex flex-wrap gap-12 justify-between border-b-[1px] border-white py-4'>
          <div>
            <div className='text-gray'>COMPANY</div>
            <ul className='list-none text-white mt-4'>
              <li>About us</li>
              <li>Careers</li>
              <li>Swiggy Instamart</li>
            </ul>
          </div>
          <div>
            <div className='text-gray'>CONTACT</div>
            <ul className='list-none text-white mt-4'>
              <li>Help &amp; Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <div className='text-gray'>LEGAL</div>
            <ul className='list-none text-white mt-4'>
              <li>Terms &amp; Conditions</li>
              <li>Refund &amp; Cancellation</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row flex-nowrap justify-between text-white py-4 lg:items-center'>
          <div>
            <img className='w-36' src={footer} alt='swiggy logo' />
          </div>
          <div className='text-xl'>&copy; {year} Swiggy</div>
          <div className='flex gap-6'>
            <img
              className='w-6 hover:scale-110'
              src={facebook}
              alt='facebook'
            />
            <img
              className='w-6 hover:scale-110'
              src={pintrest}
              alt='pinterest'
            />
            <img
              className='w-6 hover:scale-110'
              src={instagram}
              alt='instagram'
            />
            <img className='w-6 hover:scale-110' src={twitter} alt='twitter' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
