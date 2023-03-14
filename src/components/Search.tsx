import { useEffect, useState } from 'react';
import { fetchQueryResult } from '../redux/features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Suggestions } from './';

const Search = () => {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);

  const data = useAppSelector(state => state.search.data);
  const dispatch = useAppDispatch();

  const suggestions = data[query];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length && !data[query]) dispatch(fetchQueryResult(query));
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);
  console.log('::::search:::::');

  return (
    <div className='mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16 my-20'>
      <div className='m-2 p-2 sm:mx-4 sm:px-4 md:mx-8 md:px-8 lg:mx-16 lg:px-16'>
        <div className='h-12 px-2 flex justify-between items-center border border-gray-light rounded-md '>
          <input
            className='p-2 w-full text-ellipsis font-extralight text-sm focus:outline-none '
            type='search'
            placeholder='Search for restaurants and food'
            onChange={e => setQuery(e.target.value)}
            value={query}
            autoFocus
            onFocus={() => setShow(true)}
            // onBlur={() => setShow(false)}
          ></input>
          {!show && (
            <span className='material-symbols-outlined font-extralight'>
              search
            </span>
          )}
        </div>
        {show && <Suggestions data={suggestions} />}
      </div>
    </div>
  );
};

export default Search;
