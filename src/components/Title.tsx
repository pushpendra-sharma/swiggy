import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Title = () => {
  return (
    <div className='w-12 hidden sm:block'>
      <Link to='/'>
        <img
          className='w-full hover:scale-105'
          src={logo}
          alt='swiggy logo'
          title='Swiggy'
        />
      </Link>
    </div>
  );
};

export default Title;
