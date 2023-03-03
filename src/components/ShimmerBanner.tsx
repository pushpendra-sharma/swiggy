const ShimmerBanner = () => {
  return (
    <div className="flex flex-col justify-evenly items-stretch px-4 my-4 animate-pulse">
      <div className="flex justify-between py-4 mb-4">
        <div className="flex flex-col gap-2 w-4/5">
          <div className="bg-gray-shimmer h-5 w-4/5 rounded mb-2" />
          <div className="bg-gray-shimmer h-4 w-3/5 rounded" />
          <div className="bg-gray-shimmer h-3 w-2/5 rounded" />
        </div>
        <div className="w-20 aspect-square bg-gray-shimmer rounded-md" />
      </div>
      <div className="flex gap-8">
        <div className="bg-gray-shimmer h-6 w-1/5 rounded" />
        <div className="bg-gray-shimmer h-6 w-1/5 rounded" />
      </div>
      <div className="bg-gray-shimmer h-14 max-w-xs min-w-[200px] rounded-lg my-4" />
      <div className="bg-gray-shimmer h-4 w-1/5 rounded" />
    </div>
  );
};

export default ShimmerBanner;
