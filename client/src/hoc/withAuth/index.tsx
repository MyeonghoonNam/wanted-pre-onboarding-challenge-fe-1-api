import { ComponentType, useEffect, useState } from 'react';
import { AuthModal } from './components';

const withAuth = (Component: ComponentType) => () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuth(true);
    }
  }, []);

  return isAuth ? <Component /> : <AuthModal />;
};

export default withAuth;
