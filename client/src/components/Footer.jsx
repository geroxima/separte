import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex h-80 flex-col justify-around bg-gray-100">
      <div className="container mx-auto flex flex-row justify-around ">
        <div className="h-40 w-80">
          <div>
            <p className="mb-4 text-2xl font-semibold">Projects</p>
          </div>
          <div className="flex flex-row justify-between">
            <ul className="list-none">
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  All
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Antique
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Design & Arts
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Games & Toys
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
                    Film
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Food
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Music
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-base text-gray-800 no-underline"
                  >
                    Technology
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
                  Explore
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Contact
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
                  Legal Information
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Fees Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-base text-gray-800 no-underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-306 h-152 flex flex-col justify-between">
          <div>
            <p className="text-2xl font-semibold">Language & Currency</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="w-full appearance-none rounded border bg-white px-4 py-2 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              defaultValue={"english"}
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
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
        <Image
          src="/images/Frame.png"
          alt="Descripción de la imagen"
          width={110}
          height={74}
          className="mr-3"
        />
        <div className="flex h-6 w-3/5 flex-row justify-between">
          <p>2024. All right reserved</p>
          <div className="flex h-6 w-48 justify-around">
            <Link href={"#"}>
              <Image
                src="/images/bi_skype.png"
                alt="Descripción de la imagen"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_facebook.png"
                alt="Descripción de la imagen"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_linkedin.png"
                alt="Descripción de la imagen"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_youtube.png"
                alt="Descripción de la imagen"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/images/bi_twitter.png"
                alt="Descripción de la imagen"
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
