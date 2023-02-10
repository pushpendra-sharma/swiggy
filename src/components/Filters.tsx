const Filters = () => {
  return (
    <div className='relative py-2 w-full'>
      <div className='top-0 w-full'>
        <div className='flex justify-between gap-4 items-center text-gray-light font-light'>
          <span>Relevance</span>
          <span>Delivery Time</span>
          <span>Rating</span>
          <span>Cost: Low To High</span>
          <span>Cost: High To Low</span>
          <div className='flex gap-2 items-center'>
            <span>Filters</span>
            <span className='material-symbols-outlined text-orange'>tune</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
