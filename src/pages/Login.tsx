import { stringify } from "querystring";
import { useState } from "react";
import Button from "../components/Button";

interface Credentials {
  userName: string;
  password: string;
  confirmPassword?: string;
}

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState<Credentials>({
    userName: "",
    password: "",
  });

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials);
  }

  return (
    <div className="bg-blue-900 flex flex-col h-screen items-center justify-center">
      <div
        className={`relative bottom-10 border rounded-lg w-96 h-${
          isLogin ? "3" : "4"
        }/6 p-6 shadow-xl bg-blue-500 static`}
      >
        <h1 className="text-center px-5 mb-5 font-semibold tracking-wider text-lg">
          {isLogin ? "Login" : "Register"}
        </h1>
        <div className="px-5">
          <span>Login</span>
          <input
            type="text"
            placeholder="Nazwa użytkownika"
            name="userName"
            onChange={handleInput}
            className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="p-5">
          <span>Hasło</span>
          <input
            type="password"
            placeholder="Hasło"
            name="password"
            onChange={handleInput}
            className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        {!isLogin && (
          <div className="px-5">
            <span>Potwierdź hasło</span>
            <input
              type="password"
              placeholder="Potwierdź hasło"
              name="confirmPassword"
              onChange={handleInput}
              className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        )}

        <div className="flex justify-end mr-4 mt-4">
          <Button
            handleClick={() => {}}
            text={isLogin ? "Login" : "Register"}
          />
        </div>
        <div
          onClick={() => setIsLogin(!isLogin)}
          className={`text-xs text-white p-0 hover:cursor-pointer absolute bottom-6 left-10`}
        >
          {isLogin
            ? " Nie masz konta? Zarejestruj się!"
            : "Masz konto? Zaloguj się!"}
        </div>
      </div>
    </div>
  );
};
