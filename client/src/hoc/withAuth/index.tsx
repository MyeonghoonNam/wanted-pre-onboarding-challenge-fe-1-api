import { ComponentType, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@components/index';

const withAuth = (Component: ComponentType) => () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuth(true);
    }
  }, [router]);

  const handleClick = useCallback(() => {
    router.push('/login');
  }, [router]);

  return isAuth ? (
    <Component />
  ) : (
    <Modal>
      <div className="flex h-1/4 p-4 border-b">
        <h3 className="text-xl font-semibold text-gray-900">사용자 미인증</h3>
      </div>

      <div className="flex justify-center items-center h-2/4 p-6 space-y-6">
        <span>로그인 후 이용해주세요.</span>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center w-full h-1/4 p-3 border-t border-gray-200 rounded-b">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600"
          onClick={handleClick}
        >
          로그인
        </button>
      </div>
    </Modal>
  );
};

export default withAuth;
