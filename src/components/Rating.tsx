type RATING = {
  rating: string;
};

const Rating = ({ rating }: RATING) => {
  if (+rating >= 4) {
    return (
      <div className='flex gap-1 items-center bg-green text-white px-2 md:py-0.5'>
        <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
          star
        </span>
        <span className='text-xs font-normal'>{rating}</span>
      </div>
    );
  } else if (+rating >= 3) {
    return (
      <div className='flex gap-1 items-center bg-orange-light text-white px-2 md:py-0.5'>
        <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
          star
        </span>
        <span className='text-xs font-normal'>{rating}</span>
      </div>
    );
  } else if (+rating >= 2) {
    return (
      <div className='flex gap-1 items-center bg-orange-pale text-white px-2 md:py-0.5'>
        <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
          star
        </span>
        <span className='text-xs font-normal'>{rating}</span>
      </div>
    );
  } else {
    return (
      <div className='flex gap-1 items-center bg-red text-white px-2 md:py-0.5'>
        <span className='material-symbols-outlined aspect-square material-symbols-fill relative bottom-[1px] text-white text-xs'>
          star
        </span>
        <span className='text-xs font-normal'>{rating}</span>
      </div>
    );
  }
};

export default Rating;
