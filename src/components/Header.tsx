import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { fetchItems } from "../api";
import { useAppDispatch } from "../hooks";
import { setItems } from "../store";
import { Search } from "./Search";

export const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <header className="text-gray-200 body-font bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <div className="flex title-font font-medium flex-col items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-gray-200">Carleon guide</span>
          <span className="ml-3 text-xs text-gray-200">Worth or not?</span>
        </div>
        <Search />
        <nav className="flex flex-wrap items-center text-base justify-center">
          <div
            className="mr-5 hover:text-gray-900 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Main
          </div>
          <div
            className="mr-5 hover:text-gray-900 hover:cursor-pointer"
            onClick={() => {
              navigate("/tutorial");
            }}
          >
            Tutorial
          </div>
          <div
            className="mr-5 hover:text-gray-900 hover:cursor-pointer"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className="mr-5 hover:text-gray-900 bg-orange-700 p-1 rounded-md hover:bg-orange-200 hover:cursor-pointer"
            onClick={() => {
              const data = fetchItems();
              dispatch(setItems(data));
            }}
          >
            Fetch data
          </div>
          <div
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
          </div>
        </nav>
      </div>
    </header>
  );
};
