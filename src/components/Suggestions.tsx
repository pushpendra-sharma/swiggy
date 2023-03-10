import { Link } from 'react-router-dom';
import { SUGGESTION } from '../utils/types';

const Suggestions = ({ data }: { data: SUGGESTION[] }) => {
  return (
    data && (
      <div className='relative py-0 flex flex-col gap-1 max-h-96 overflow-y-scroll border border-gray-light border-t-0'>
        {data.map(item => {
          const id = JSON.parse(item.metadata).data.primaryRestaurantId;

          return (
            <Link to={`/restaurant/${id}`} key={item.text} replace={true}>
              <p className='hover:bg-[#e5e7eb] px-4'>{item.text}</p>
            </Link>
          );
        })}
      </div>
    )
  );
};

export default Suggestions;
