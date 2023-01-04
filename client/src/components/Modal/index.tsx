import type { Props } from './types';

const Modal = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 w-screen h-screen bg-black bg-opacity-40">
      <div className="w-1/3 h-1/3 rounded-lg bg-white">
        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
