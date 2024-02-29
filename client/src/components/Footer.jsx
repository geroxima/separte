import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SeParteLogo } from "@/components/se-parte-logo";

const Footer = () => {
  return (
    <footer className="flex h-80 flex-col justify-around overflow-hidden bg-gray-100">
      <div className="container mx-auto flex flex-row justify-around ">
        <div className="h-40 w-80">
          <div>
            <p className="mb-4 text-2xl font-semibold">Proyectos</p>
          </div>
          <div className="flex flex-row justify-between">
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Todo
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Antiguo
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Arte y Diseño
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Videojuegos y juguetes
                </Link>
              </li>
            </ul>

            <div className="mr-4">
              <ul className="list-none">
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Películas
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Comida
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Musica
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Tecnología
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-75 h-40">
          <div>
            <p className="mb-4 text-2xl font-semibold">About</p>
          </div>
          <div className="flex flex-row justify-between">
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  About US
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Explorar
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-base text-gray-800 no-underline"
                ></Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-143 h-40">
          <div>
            <p className="mb-4 text-2xl font-semibold">Info</p>
          </div>
          <div className="flex flex-row justify-between">
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Información Legal
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Política de Tarifas
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Política de Privacidad
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-306 h-152 flex flex-col justify-between">
          <div>
            <p className="text-2xl font-semibold">Idioma y Moneda</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="w-full appearance-none rounded border bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              defaultValue={"english"}
            >
              <option value="english">English</option>
              <option value="spanish">Español</option>
            </select>
          </div>
          <div>
            <div className="w-full">
              <select
                className="w-full appearance-none rounded border bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                defaultValue={"usd"}
              >
                <option value="usd">Dollar (US)</option>
                <option value="eur">Euro (EUR)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row items-center justify-around">
        <Link href="/">
          <SeParteLogo />
        </Link>
        <div className="flex h-6 w-3/5 flex-row justify-between">
          <p>2024. Todos los derechos reservados</p>
          <div className="flex h-6 w-48 justify-around">
            <Link href={"#"}>
              <Image
                src="/images/bi_skype.png"
                alt="skype"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_facebook.png"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_linkedin.png"
                alt="linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_youtube.png"
                alt="youtube"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_twitter.png"
                alt="X"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
