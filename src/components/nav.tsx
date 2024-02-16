import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BASEURL } from "@/lib/links";
import { Tally5 } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useUser();
  const teacher_email = token.user?.primaryEmailAddress?.emailAddress;
  const [xp, setX] = useState(0);
  const user = useUser();

  useEffect(() => {
    axios
      .get(`${BASEURL}/score/xp/${user?.user?.id}`)
      .then((res) => setX(res.data));
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent text-white fixed w-full z-20 top-0 left-0 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          STRZZ
        </span>
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 md:hidden hover:text-gray-700 focus:outline-none focus:text-gray-700"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center md:flex-row md:space-x-11 md:items-center mr-20">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Leaderboard
                </Link>
              </li>

              {teacher_email === "desmondaditya@gmail.com" ? (
                <li>
                  <Link
                    to="/create"
                    className="text-white hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                  >
                    Create
                  </Link>
                </li>
              ) : null}
              <SignedOut>
                <li>
                  <SignInButton />
                </li>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <li className="flex flex-row items-center">
                <Tally5 className="h-4 w-4" color="white" />
                {xp}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
