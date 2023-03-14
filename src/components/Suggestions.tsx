import { Link } from 'react-router-dom';
import { SUGGESTION } from '../utils/types';

const Suggestions = ({ data }: { data: SUGGESTION[] }) => {
  return (
    data && (
      <div className='relative py-0 flex flex-col gap-1 max-h-96 overflow-y-scroll border border-gray-light border-t-0'>
        {data?.length ? (
          <>
            {data.map(item => {
              const id = JSON.parse(item.metadata).data?.primaryRestaurantId;

              return (
                id && (
                  <Link to={`/restaurant/${id}`} key={item.text} replace={true}>
                    <p className='hover:bg-[#e5e7eb] px-4'>{item.text}</p>
                  </Link>
                )
              );
            })}
          </>
        ) : (
          <p className='hover:bg-[#e5e7eb] px-4'>No restaurant found!</p>
        )}
      </div>
    )
  );
};

export default Suggestions;
