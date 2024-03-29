"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SeParteLogo } from "@/components/se-parte-logo";
import { useSession } from "./hooks/useSession";
import { useRouter } from "next/navigation";
const Header = ({ titleButton, titleLink }) => {
  const { isAuthenticated, logout } = useSession();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <header className="flex flex-col items-center justify-evenly pt-2 md:flex-row md:items-center lg:flex-row lg:items-center">
      <div className="order-last flex flex-row items-center justify-around md:order-1 lg:order-1">
        <Link
          href="/"
          className="py-1 pr-8 text-lg font-medium text-text-color no-underline hover:text-gray-900"
          style={{ display: "inline-block" }}
        >
          Descubrir
        </Link>

        {isAuthenticated && (
          <Link
            href="/project/new"
            className="ml-8 flex items-center text-lg font-medium text-text-color no-underline hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-4 h-5 w-5  text-lg" />
            Empezar un Nuevo Proyecto
          </Link>
        )}
      </div>

      <div className="order-1 md:order-2 lg:order-2">
        <Link href="/">
          <SeParteLogo />
        </Link>
      </div>

      <div className="order-2 flex flex-row items-center justify-between md:order-3 lg:order-3">
        {isAuthenticated ? (
          <button
            href="/login"
            onClick={handleLogout}
            className="mr-11 flex items-center text-lg font-medium text-text-color no-underline hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-9 h-5 w-5 text-lg" />
            Cerrar sesión
          </button>
        ) : (
          <Link
            href="/login"
            className="mr-11 flex items-center text-lg font-medium text-text-color no-underline hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-9 h-5 w-5 text-lg" />
            {titleLink}
          </Link>
        )}
        <a
          href="/about"
          className="bg-green h-10 w-40 rounded-lg border-none bg-primary-green px-4 py-2 text-center text-lg text-white hover:cursor-pointer active:bg-secondary-green"
        >
          {titleButton}
        </a>
      </div>
    </header>
  );
};

export default Header;
