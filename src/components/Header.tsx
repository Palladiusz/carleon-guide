import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  return (
    <header className="text-gray-200 body-font bg-cyan-600 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <a className="flex title-font font-medium flex-col items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-gray-200">Carleon guide</span>
          <span className="ml-3 text-xs text-gray-200">Worth or not?</span>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a
            className="mr-5 hover:text-gray-900 hover:cursor-pointer"
            onClick={() => {
              if (auth.currentUser != null) {
                signOut(auth)
                  .then(() => {
                    navigate("/login");
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              } else {
                navigate("/login");
              }
            }}
          >
            {auth.currentUser != null ? "Logout" : "Login"}
          </a>
        </nav>
      </div>
    </header>
  );
};
