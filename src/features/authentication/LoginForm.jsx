import { useState } from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { useLogin } from "../authentication/useLogin";
import { CgSpinner } from "react-icons/cg";

function LoginForm() {
  const [email, setEmail] = useState("vaibhav@example.com");
  const [password, setPassword] = useState("test@123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: (data, error) => {
          if (!error) {
            setEmail("");
            setPassword("");
          }
        },
      }
    );
  }

  return (
    <Form
      type="regular"
      className="w-full max-w-lg mx-auto shadow-xl flex flex-col gap-y-4 p-8 bg-white rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="py-1 font-medium">
          Email address
        </label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="border border-indigo-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="py-1 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-indigo-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="text-white mt-4 py-3 font-semibold"
      >
        {!isLoading ? "Log in" : <CgSpinner />}
      </Button>
    </Form>
  );
}

export default LoginForm;
