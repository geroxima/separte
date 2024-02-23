import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-evenly">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="#"
          className="text-lg font-medium text-gray-800 no-underline hover:text-gray-900"
        >
          Discover
        </Link>
        <Link
          href="#"
          className="ml-8 flex items-center text-lg font-medium text-gray-800 no-underline hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-4 h-5 w-5  text-lg" />
          Start a New Project
        </Link>
      </div>

      <p className="text-left text-4xl font-extrabold leading-10 tracking-normal">
        Se parte
      </p>
      <div className="flex flex-row items-center justify-between">
        <Link
          href="#"
          className="mr-8 flex items-center text-lg font-medium text-gray-800 no-underline hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faSearch} className="mr-6 h-5 w-5 text-lg" />
          Sign in
        </Link>
        <button className="h-10 w-40 rounded-lg border-none bg-blue-700 px-4 py-2 text-lg text-white hover:cursor-pointer active:bg-blue-800">
          How it works
        </button>
      </div>
    </header>
  );
};

export default Header;
