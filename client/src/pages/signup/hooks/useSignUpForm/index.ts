import { useMemo } from 'react';
import { useSignUp } from '@mutations/index';
import { useForm } from '@hooks/index';

const useSignUpForm = () => {
  const { mutateAsync, isLoading, error: apiError } = useSignUp();

  const initialFormState = useMemo(
    () => ({
      email: '',
      password: '',
      passwordConfirm: '',
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
    validate: ({ email, password, passwordConfirm }) => {
      let emailError = null;
      let passwordError = null;
      let passwordConfirmError = null;

      const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const regPassword = /^[A-Za-z0-9]{8,}$/;

      if (!email || !regEmail.test(email)) {
        emailError = '올바른 양식의 이메일을 입력해주세요.';
      }

      if (!password || !regPassword.test(password)) {
        passwordError = '비밀번호를 입력해주세요.';
      }

      if (!passwordConfirm || password !== passwordConfirm) {
        passwordConfirmError =
          '재확인 비밀번호가 기존 비밀번호와 동일하게 다시 입력해주세요.';
      }

      return {
        email: emailError,
        password: passwordError,
        passwordConfirm: passwordConfirmError,
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

export default useSignUpForm;
