import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <img src="/logo2.png" alt="Logo" className="h-10 object-contain" />
        </div>
        <h2 className="text-2xl font-semibold font-poppins text-gray-600 text-center mb-6">
          Login to your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
