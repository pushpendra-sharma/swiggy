import { useState } from 'react';
import { Question } from './';
import { QuestionT } from '../utils/types';

type Props = {
  heading: string;
  questions: QuestionT[];
};

const Accordion = ({ heading, questions }: Props) => {
  const [visibleQ, setVisibleQ] = useState('');

  return (
    <div className='bg-gray-thin md:bg-white md:pl-8 w-full'>
      <p className='text-gray-ultra py-4 font-medium uppercase md:capitalize px-4 text-xs md:text-2xl md:font-semibold'>
        {heading}
      </p>
      <div className='bg-white px-4 w-full'>
        {questions.map(q => (
          <Question
            id={q.id}
            key={q.id}
            title={q.title}
            description={q.description}
            isOpen={visibleQ === q.id}
            callback={() => setVisibleQ(q.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
