type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
};

const Modal = ({ title, description, onClose }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className='w-full h-full backdrop-blur-[2px] absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-center p-2'
    >
      <div
        className='w-full sm:w-1/2 h-2/4 bg-white rounded-md shadow-md opacity-100 p-2 overflow-hidden flex flex-col mt-8'
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className='flex justify-end'>
          <button className='max-w-fit font-bold text-gray' onClick={onClose}>
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>
        {title && <header className='text-lg'>{title}</header>}
        {description && <div className='overflow-hidden'>{description}</div>}
        <div className='border border-[#d3d5df] shadow-sm p-4 mx-4 cursor-pointer relative'>
          <span className='material-symbols-outlined top-1 relative px-4'>
            my_location
          </span>
          <span className='hover:text-orange font-medium'>
            Get current Location
          </span>
          <p className='text-xs text-gray-light px-14'>Using GPS</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
