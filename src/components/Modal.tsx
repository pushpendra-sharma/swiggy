interface ModalProps {
  title: string;
  description: string;
  onClose: Function;
}

const Modal = ({ title, description, onClose }: ModalProps) => {
  const handleClick = e => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className='border-red w-full h-full backdrop-blur-[2px] absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-center p-2'
    >
      <div
        className='w-full sm:w-1/3 h-2/4 bg-white rounded-md shadow-md opacity-100 p-2 overflow-hidden flex flex-col mt-8'
        onClick={handleClick}
      >
        <div className='flex justify-end'>
          <button className='max-w-fit font-bold text-gray' onClick={onClose}>
            <span className='material-symbols-outlined'>close</span>
          </button>
        </div>
        <header className='text-lg'>Modal header</header>
        <div className='overflow-hidden'>
          I'm a modal dialogsdgsegshrsh sdhsehggrwr g Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deleniti sit, eligendi omnis rem nostrum
          repellendus adipisci natus quos praesentium, ullam optio. Praesentium
          adipisci vel molestias eligendi ut autem neque laboriosam!
        </div>
        <footer className=''>footer</footer>
      </div>
    </div>
  );
};

export default Modal;
