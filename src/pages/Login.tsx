import { stringify } from "querystring";
import { useState } from "react";

export const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div>
      <h1>{isRegistered ? "Login" : "Register"}</h1>
      <div>
        <span>Login</span>
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          name="userName"
          onChange={handleInput}
          className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div>
        <span>Hasło</span>
        <input
          type="text"
          placeholder="Hasło"
          name="password"
          onChange={handleInput}
          className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};
