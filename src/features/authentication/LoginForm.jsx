import { useState } from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      type="regular"
      className="w-full max-w-md mx-auto shadow-xl flex flex-col gap-y-4 p-8 bg-white rounded-lg"
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
          onChange={(e) => setPassword(e.target.value)}
          className="border border-indigo-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <Button type="submit" className="text-white mt-4 py-3 font-semibold">
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
