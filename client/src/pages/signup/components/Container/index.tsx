import type { Props } from './types';

const Container = ({ children }: Props) => {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      {children}
    </main>
  );
};

export default Container;
