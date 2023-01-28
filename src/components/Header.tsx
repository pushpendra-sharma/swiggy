import { Link } from 'react-router-dom';
import Title from './Title';

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>
          <Link to="address">
            <b>Home</b> Sector-1, Noida, U.P.
          </Link>
        </li>
        <li>
          <Link to="search">Search</Link>
        </li>
        <li>
          <Link to="offers">Offers</Link>
        </li>
        <li>
          <Link to="support">Help</Link>
        </li>
        <li>
          <Link to="account">Profile</Link>
        </li>
        <li>
          <Link to="checkout">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
