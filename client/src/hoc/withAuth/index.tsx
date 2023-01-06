import { ComponentType, useEffect, useState } from 'react';
import { AuthModal } from './components';

const withAuth = (Component: ComponentType) => () => {
  const [isAuth, setIsAuth] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuth(true);
    }

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return isAuth ? <Component /> : <AuthModal />;
};

export default withAuth;
