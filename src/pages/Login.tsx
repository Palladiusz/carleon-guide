import { useState } from "react";
import Button from "../components/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

interface Credentials {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  function handleRegister() {
    if (credentials.password === credentials.confirmPassword) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  }

  function handleLogin() {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <div className="bg-gray-700 text-white flex flex-col bg-cover items-center justify-center">
      <div
        className={`relative bottom-10 border rounded-lg w-96 h-${
          isLogin ? "3" : "4"
        }/6 p-6 shadow-xl bg-orange-500 static`}
      >
        <h1 className="text-center  px-5 mb-5 font-semibold tracking-wider text-lg">
          {isLogin ? "Login" : "Register"}
        </h1>
        <div className="px-5">
          <span>Login</span>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleInput}
            className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="p-5">
          <span>Hasło</span>
          <input
            type="password"
            placeholder="Password"
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
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleInput}
              className="w-full bg-blue-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        )}

        <div className="flex justify-end mr-4 mt-4">
          <Button
            handleClick={() => {
              if (isLogin) {
                handleLogin();
              } else {
                handleRegister();
              }
            }}
            text={isLogin ? "Login" : "Register"}
          />
        </div>
        <div
          onClick={() => setIsLogin(!isLogin)}
          className={`text-xs text-white p-0 hover:cursor-pointer absolute bottom-6 left-10`}
        >
          {isLogin ? "Dont have account? Register!" : "Have account? Login!"}
        </div>
      </div>
    </div>
  );
};
