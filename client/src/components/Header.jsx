import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = ({ titleButton, signIn = true, titleLink }) => {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-evenly">
      <div className="flex flex-row items-center justify-around">
        <Link
          href="#"
          className="py-1 pr-8 text-lg font-medium text-gray-800 no-underline hover:text-gray-900"
          style={{ borderRight: "1px solid #BFBFBF", display: "inline-block" }}
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
        Sé parte
      </p>
      <div className="flex flex-row items-center justify-between">
        {signIn ? (
          <Link
            href="#"
            className="mr-11 flex items-center text-lg font-medium text-gray-800 no-underline hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-9 h-5 w-5 text-lg" />
            {titleLink}
          </Link>
        ) : (
          ""
        )}
        <button className="h-10 w-40 rounded-lg border-none bg-blue-600 px-4 py-2 text-lg text-white hover:cursor-pointer active:bg-blue-700">
          {titleButton}
        </button>
      </div>
    </header>
  );
};

export default Header;
