import { Link } from 'react-router-dom';
import Title from './Title';

const Header = () => {
  return (
    <header className='px-4 py-2 md:px-8 lg:px-12'>
      <div className='mx-0 md:mx-16 lg:mx-32 flex items-center justify-between'>
        <Title />
        <div className='flex mr-8'>
          <Link to='address'>
            <div className='flex items-center gap-2 text-sm'>
              <span className='hover:text-orange font-bold border-b-2'>
                Home
              </span>
              <span className='text-gray-light hover:opacity-75'>
                Sector-1, Noida, U.P.
              </span>
              <span className='material-symbols-outlined text-orange'>
                expand_more
              </span>
            </div>
          </Link>
        </div>
        <ul className='flex justify-between items-center gap-6 font-medium text-gray-medium'>
          <li className=''>
            <Link to='search'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>search</span>
                <span>Search</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='offers'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>percent</span>
                <span>Offers</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='support'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>
                  contact_support
                </span>
                <span>Help</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='account'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>person</span>
                <span>Sign in</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='checkout'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>shopping_bag</span>
                <span>Cart</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
