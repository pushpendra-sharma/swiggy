import { Link } from 'react-router-dom';
import Address from './Address';
import Title from './Title';

const Header = () => {
  return (
    <header className='px-4 py-2 md:px-8 lg:px-12 fixed top-0 w-full z-10 bg-white shadow'>
      <div className='mx-0 sm:mx-4 md:mx-8 lg:mx-16 flex gap-4 items-center justify-between'>
        <Title />
        <Address />
        <ul className='flex justify-between shrink items-center gap-4 font-medium text-gray-medium'>
          <li className='hidden sm:inline'>
            <Link to='search'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>search</span>
                <span>Search</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='offers'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>percent</span>
                <span>Offers</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
            <Link to='support'>
              <div className='flex items-center gap-2 hover:text-orange'>
                <span className='material-symbols-outlined'>
                  contact_support
                </span>
                <span>Help</span>
              </div>
            </Link>
          </li>
          <li className=''>
            <Link to='account'>
              <div className='flex items-center gap-2 hover:text-orange'>
                {/* <span className='material-symbols-outlined'>person</span> */}
                <span className='material-symbols-outlined'>account_circle</span>
                <span className='hidden sm:inline'>Sign in</span>
              </div>
            </Link>
          </li>
          <li className='hidden sm:inline'>
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
