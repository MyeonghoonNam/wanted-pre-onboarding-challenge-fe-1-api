import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import type { ApiError } from '@api/config/types';
import { signUpApi } from './api';

const useSignUp = () => {
  const router = useRouter();

  const mutation = useMutation(signUpApi, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: (e: ApiError) => {
      if (e.status >= 500) {
        router.push('/error');
      }
    },
  });

  return mutation;
};

export default useSignUp;
