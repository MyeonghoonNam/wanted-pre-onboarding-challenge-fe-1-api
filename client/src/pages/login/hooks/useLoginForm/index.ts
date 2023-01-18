import { useMemo } from 'react';
import { useLogin } from '@mutations/index';
import { useForm } from '@hooks/index';

const useLoginForm = () => {
  const { mutateAsync, isLoading, error: apiError } = useLogin();

  const initialFormState = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );

  const {
    values,
    errors: inputError,
    handleChange,
    handleSubmit,
  } = useForm({
    initialState: initialFormState,
    validate: ({ email, password }) => {
      let emailError = null;
      let passwordError = null;

      const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const regPassword = /^[A-Za-z0-9]{8,}$/;

      if (!email || !regEmail.test(email)) {
        emailError = '올바른 양식의 이메일을 입력해주세요.';
      }

      if (!password || !regPassword.test(password)) {
        passwordError = '비밀번호를 입력해주세요.';
      }

      return {
        email: emailError,
        password: passwordError,
      };
    },
    onSubmit: async () => {
      const { email, password } = values;
      await mutateAsync({ email, password });
    },
  });

  return {
    isLoading,
    inputError,
    apiError,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
