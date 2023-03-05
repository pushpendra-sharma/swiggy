import { Link } from 'react-router-dom';
import Address from './Address';
import Title from './Title';

const Header = () => {
  return (
    <header className='p-4 md:px-8 lg:px-12 fixed top-0 w-full z-10 bg-white shadow'>
      <div className='mx-0 sm:mx-4 md:mx-8 lg:mx-16 flex gap-4 items-center justify-between'>
        <Title />
        <Address />
        <ul className='flex justify-between shrink items-center gap-8 text-gray-medium'>
          <li className=''>
            <Link to='search'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined font-medium'>
                  search
                </span>
                <span className='font-medium hidden sm:inline'>Search</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='offers'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined font-medium'>
                  percent
                </span>
                <span className='font-medium'>Offers</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='support'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined font-medium'>
                  contact_support
                </span>
                <span className='font-medium'>Help</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='account'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined font-medium'>
                  account_circle
                </span>
                <span className='font-medium'>Sign In</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='checkout'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined font-medium'>
                  shopping_bag
                </span>
                <span className='font-medium'>Cart</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
