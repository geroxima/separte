import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SeParteLogo } from "@/components/se-parte-logo";

const Header = ({ titleButton, signIn = true, titleLink }) => {
  return (
    <header className="flex flex-col lg:flex-row md:flex-row items-center lg:items-center md:items-center justify-evenly pt-2">
      <div className="flex flex-row items-center justify-around order-last lg:order-1 md:order-1">
        <Link
          href="#"
          className="py-1 pr-8 text-lg font-medium text-text-color no-underline hover:text-gray-900"
          style={{ borderRight: "1px solid #BFBFBF", display: "inline-block" }}
        >
          Discover
        </Link>

        <Link
          href="#"
          className="ml-8 flex items-center text-lg font-medium text-text-color no-underline hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-4 h-5 w-5  text-lg" />
          Start a New Project
        </Link>
      </div>

      <div className="order-1 md:order-2 lg:order-2">
        <Link href="#">
          <SeParteLogo/>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-between order-2 lg:order-3 md:order-3">
        {signIn ? (
          <Link
            href="#"
            className="mr-11 flex items-center text-lg font-medium text-text-color no-underline hover:text-gray-900"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="mr-9 h-5 w-5 text-lg"
            />
            {titleLink}
          </Link>
        ) : (
          ""
        )}
        <button className="h-10 w-40 rounded-lg text-white bg-primary-green border-none bg-green px-4 py-2 text-lg hover:cursor-pointer active:bg-secondary-green">
          {titleButton}
        </button>
      </div>
    </header>
  );
};

export default Header;
