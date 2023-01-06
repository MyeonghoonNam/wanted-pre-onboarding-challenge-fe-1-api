import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signUpApi } from './api';

const useSignUp = () => {
  const router = useRouter();

  const mutation = useMutation(signUpApi, {
    onSuccess: () => {
      router.push('/login');
    },
  });

  return mutation;
};

export default useSignUp;
