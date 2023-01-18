import { useRouter } from 'next/router';
import { ComponentType, useEffect, useState } from 'react';

const withNoneAuth = (Component: ComponentType) => () => {
  const [isAuth, setIsAuth] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuth(true);
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isAuth) {
    router.push('/main');
  }

  return isAuth ? null : <Component />;
};

export default withNoneAuth;
