import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <div className="items-center text-center justify-center">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 20 20"
              //   color="darkviolet"
              className="text-violet-600 items-ceter justify-center"
            >
              <path
                fill="currentColor"
                d="M18 3v2H2V3h16zm-6 4v2H2V7h10zm6 0v2h-4V7h4zM8 11v2H2v-2h6zm10 0v2h-8v-2h8zm-4 4v2H2v-2h12z"
              ></path>
            </svg>

            
            <NavLink
              to="/"
              className="ml-1 text-xl text-violet-600 "
            >
              MyPrompt
            </NavLink>
          </span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className={`mr-5 hover:text-violet-700 ${
                currentPath === "/" ? "active" : ""
              }`}
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className={`mr-5 hover:text-violet-700 ${
                currentPath === "/blogs" ? "active" : ""
              }`}
            >
              Blogs{" "}
            </NavLink>

            <NavLink
              to="/prompts"
              className={`mr-5 hover:text-violet-700 ${
                currentPath === "/prompts" ? "active" : ""
              }`}
            >
              Prompts
            </NavLink>

            <NavLink
              to="/about"
              className={`mr-5 hover:text-violet-700 ${
                currentPath === "/about" ? "active" : ""
              }`}
            >
              About
            </NavLink>
          </nav>

          <button className="inline-flex items-center text-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-violet-300 hover:text-black rounded text-base mt-4 md:mt-0">
            Buy a coffee{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 832 1024"
            >
              <path
                fill="currentColor"
                d="M768 256h-6l-26 320H573q-11-55-55-91.5T416 448t-102 36.5t-55 91.5H96L70 256h-6q-27 0-45.5-18.5T0 192.5T18.5 147T64 128V64q0-27 18.5-45.5T128 0h576q26 0 45 18.5T768 64v64q26 0 45 19t19 45.5t-19 45t-45 18.5zM259 640q11 55 55 91.5T416 768t102-36.5t55-91.5h158l-27 320q-4 24-21.5 44t-42.5 20H192q-25 0-42.5-20T128 960l-27-320h158z"
              />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
