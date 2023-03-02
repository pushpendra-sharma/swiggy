const VegOrNonVeg = ({ isVeg }:{isVeg:boolean}) => {
  const color = isVeg ? 'green' : 'red';

  return (
    <div className={`w-5 h-5 text-center align-middle border-2 p-0.5 border-${color}`}>
      <div className={`w-3 h-3 rounded-full bg-${color}`}></div>
    </div>
  );
};

export default VegOrNonVeg;
