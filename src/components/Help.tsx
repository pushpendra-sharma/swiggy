import { useState } from 'react';
import { HELP_DATA } from '../utils/constants';
import { Accordion } from './';

const Help = () => {
  const [tab, setTab] = useState('Partner Onboarding');
  const headings = Object.keys(HELP_DATA.data);
  const questions = HELP_DATA.data[tab];

  return (
    <div className='mt-20'>
      <div className='mx-0 py-2 md:px-8 lg:px-12 md:bg-blue'>
        <div className='px-4 py-1 sm:px-8 md:px-12 lg:px-16 md:pt-12 lg:pt-16 md:text-white'>
          <h1 className='text-xl md:text-[32px] font-semibold capitalize'>
            Help & Support
          </h1>
          <h2 className='text-sm md:text-base mt-[2px]'>
            Let's take a step ahead and help you better.
          </h2>
        </div>
        <div className='py-4 md:p-8 sm:mx-8 md:mx-12 lg:mx-16 bg-white flex flex-col md:flex-row'>
          <div className='hidden bg-gray-thin pl-4 pt-4 md:flex flex-col'>
            {headings.map(heading => (
              <button
                className={`text-gray-ultra p-4 md:pl-12 md:py-6 font-semibold ${
                  tab === heading ? 'bg-white' : ''
                }`}
                key={heading}
                onClick={() => setTab(heading)}
              >
                {heading}
              </button>
            ))}
          </div>
          <Accordion heading={tab} questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default Help;
