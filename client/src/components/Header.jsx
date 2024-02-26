import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
          <svg
            width="115.29"
            height="30"
            viewBox="0 0 392 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.8 58.3C44.8 66.7 37.9 75.2 22.6 75.2C7.1 75.2 0.2 66.7 0.2 58.3H12.4C12.4 62.3 16.3 64.3 22.6 64.3C27 64.3 31.7 62.7 31.7 58.7C31.7 49 1 59.4 1 39.7C1 31.8 7.7 24 22.5 24C37.2 24 43.9 31.8 43.9 39.7C43.9 40 43.9 40.3 43.9 40.5H31.7C31.7 40.2 31.7 40 31.7 39.7C31.7 36.6 27.9 34.9 22.6 34.9C18.2 34.9 14.2 36.5 14.2 39.5C14.2 46.9 44.8 38.1 44.8 58.3ZM75.2164 34.9C67.7164 34.9 64.3164 40.5 63.4164 44.8L87.0164 44.9C86.2164 40.7 82.8164 34.9 75.2164 34.9ZM63.0164 52.6C63.4164 56.7 66.2164 64.3 75.2164 64.3C81.3164 64.3 84.4164 60.8 85.8164 57.6H98.8164C97.5164 63.1 92.2164 75.2 75.2164 75.2C57.3164 75.2 50.5164 61.4 50.5164 49.6C50.5164 37.8 57.2164 24 75.2164 24C93.0164 24 100.816 37.5 99.7164 52.6H63.0164ZM89.3164 0.799995L81.2164 16.5H70.0164L77.1164 0.799995H89.3164ZM173.938 49.6C173.938 41.3 168.238 36.1 161.038 36.1C153.838 36.1 148.138 41.3 148.138 49.6C148.138 57.9 153.838 63.1 161.038 63.1C168.238 63.1 173.938 57.9 173.938 49.6ZM187.338 49.6C187.338 61.7 180.538 75.2 164.838 75.2C154.838 75.2 150.338 69.7 148.138 65.6H146.338C146.338 65.6 148.138 70.8 148.138 77.5V101.8H134.738V25.2H148.138V25.7C148.138 29.4 146.338 33.5 146.338 33.5H148.138C150.338 29.4 154.838 24 165.238 24C180.538 24 187.338 37.5 187.338 49.6ZM229.678 49.1C228.178 49.9 223.678 50.7 214.378 52C211.078 52.6 207.078 54.9 207.078 58.7C207.078 62.1 210.078 64.4 213.478 65C216.978 65.4 219.378 65.3 223.078 63.4C226.778 61.4 229.078 58.1 229.478 55.2C229.678 54 229.678 53 229.678 51.9V49.1ZM249.578 61.9V74.1H239.978C235.678 74.1 233.578 71.2 233.578 67.5C233.578 63.3 235.378 60.1 235.378 60.1H233.578C233.578 60.1 231.278 67.4 225.278 71.2C219.778 74.7 213.578 75.7 207.478 75C200.678 74.3 194.278 69 194.278 60.9C194.278 52.2 199.978 48.5 205.978 47.1C212.578 45.6 217.678 45.6 222.178 44.8C225.878 44.1 230.078 43.8 228.978 40.1C228.078 36.9 223.978 34.9 218.778 34.9C211.178 34.9 207.678 38.8 207.678 42.6H194.678C194.678 33.7 201.978 24 218.978 24C235.878 24 243.078 33.7 243.078 42.9V59.6C243.078 60.9 244.078 61.9 245.478 61.9H249.578ZM293.051 25.2V37.3C278.451 37.3 273.051 48.3 273.051 57.8V74H259.651V39.1C259.651 38 259.051 37.3 257.851 37.3H252.051V25.2H266.451C269.151 25.2 271.451 26.6 271.451 29.5C271.451 33.9 269.651 42.9 269.651 42.9H271.451C274.351 32.5 281.851 25.3 293.051 25.2ZM306.533 57.8V37.3H297.733V25.2H306.533V4H319.933V25.2H335.133V37.3H319.933V57.6C319.933 60 321.733 61.9 324.033 61.9C325.533 61.9 334.133 61.9 335.133 61.9V74C331.833 74 332.333 74 322.633 74C311.333 74 306.533 65.6 306.533 57.8ZM365.548 34.9C358.048 34.9 354.648 40.5 353.748 44.8L377.348 44.9C376.548 40.7 373.148 34.9 365.548 34.9ZM353.348 52.6C353.748 56.7 356.548 64.3 365.548 64.3C371.648 64.3 374.748 60.8 376.148 57.6H389.148C387.848 63.1 382.548 75.2 365.548 75.2C347.648 75.2 340.848 61.4 340.848 49.6C340.848 37.8 347.548 24 365.548 24C383.348 24 391.148 37.5 390.048 52.6H353.348Z"
              fill="#07C051"
            />
          </svg>
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
