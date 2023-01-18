import { useLoginForm } from '@pages/login/hooks';
import { ErrorText } from '@components/index';

const LoginForm = () => {
  const { isLoading, inputError, apiError, handleChange, handleSubmit } =
    useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] p-[16px] shadow-md box-border border-2 [&>input:not(:first-of-type)]:mt-2"
    >
      <h1 className="mb-2.5 text-2xl font-bold text-center cursor-default">
        Login
      </h1>

      <input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="email"
        className="block w-full py-1 px-1.5 border-2 border-[#333] selection:rounded bg-white text-sm box-border"
      />

      {inputError.email && <ErrorText>{inputError.email}</ErrorText>}

      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
        className="block w-full py-1 px-1.5 border-2 border-[#333] rounded bg-white text-sm box-border"
      />

      {inputError.password && <ErrorText>{inputError.password}</ErrorText>}

      {apiError && <ErrorText>{apiError.message}</ErrorText>}

      <button
        type="submit"
        disabled={isLoading}
        className="block w-full h-[32px] mt-2 text-white rounded bg-black box-border cursor-pointer hover:bg-[#222] disabled:bg-[#888]"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
