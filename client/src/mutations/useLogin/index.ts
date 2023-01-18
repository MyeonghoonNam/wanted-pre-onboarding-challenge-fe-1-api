import type { ApiError } from '@api/config/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { loginApi } from './api';

const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation(loginApi, {
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token);
      router.push('/main');
    },
    onError: (e: ApiError) => {
      if (e.status >= 500) {
        router.push('/error');
      }
    },
  });

  return mutation;
};

export default useLogin;
