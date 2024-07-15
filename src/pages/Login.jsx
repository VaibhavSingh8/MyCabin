import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-600 text-center mb-6">
          Login to your account
        </h2>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
