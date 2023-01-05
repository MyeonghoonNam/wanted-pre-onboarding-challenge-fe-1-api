const SignUpForm = () => {
  return (
    <form className="w-[400px] p-[16px] shadow-md box-border border-2 [&>input:not(:first-of-type)]:mt-2 [&>button]:mt-2">
      <h1 className="mb-2.5 text-2xl font-bold text-center cursor-default">
        SignUp
      </h1>

      <input
        type="text"
        placeholder="email"
        className="block w-full py-1 px-1.5 border-2 border-[#333] selection:rounded bg-white text-sm box-border"
      />

      <input
        type="password"
        placeholder="password"
        className="block w-full py-1 px-1.5 border-2 border-[#333] rounded bg-white text-sm box-border"
      />

      <input
        type="password"
        placeholder="passwordConfirm"
        className="block w-full py-1 px-1.5 border-2 border-[#333] rounded bg-white text-sm box-border"
      />

      <button
        type="submit"
        className="block w-full h-[32px] text-white rounded bg-black box-border cursor-pointer hover:bg-[#222] disabled:bg-[#888]"
      >
        SignUp
      </button>
    </form>
  );
};

export default SignUpForm;
