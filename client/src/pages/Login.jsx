import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { useLogin } from "../hooks/useLogin.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginError, setLoginError, loginLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-60 lg:px-8 lg:pt-32">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-300">
                Login to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-200">
                Not a member?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-gray-400 hover:text-sky-300"
                >
                  Sign up!
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <Input
                    htmlFor={"username"}
                    label={"Username"}
                    id={"username"}
                    name={"username"}
                    type={"text"}
                    required={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    htmlFor={"password"}
                    label={"Password"}
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <SubmitButton text={"Login"} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-3xl shadow-neon shadow-sky-800/60"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-40 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
