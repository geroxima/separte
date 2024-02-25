"use client";
import Image from "next/image";
import Link from "next/link";
import ProgressDots from "./ProgressDots";
import { Input } from "./ui/input";
import { useState } from "react";
const LoginForm = () => {
  const [stage, setStage] = useState(1);
  return (
    <div className="mx-auto my-12 flex max-w-3xl flex-row ">
      <div className="flex-1">
        <Image
          src="/images/login.png"
          alt="login image"
          width={500}
          height={500}
          className="object-fill"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-8">
        <ProgressDots stage={stage} />
        {stage === 1 && (
          <>
            <div>
              <span className="font-semibold">Registra tu </span>
              <span className="font-extrabold"> E-MAIL</span>{" "}
            </div>
            <form
              className="flex w-full flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setStage(2);
              }}
            >
              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Siguiente
              </button>
            </form>
            <div className="flex w-full items-center">
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
              <span className="flex-shrink-0 px-1 text-gray-400">OR</span>
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
            </div>
            <div className="flex w-full flex-col justify-center gap-4">
              <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                Google
              </button>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Facebook
              </button>
              <hr />
            </div>
            <div>
              <span>
                Ya tienes una cuenta?
                <Link href="/login" className="font- px-2 text-black">
                  Ingresar
                </Link>
              </span>
            </div>
          </>
        )}
        {stage === 2 && (
          <>
            <div>
              <span className="font-semibold">Verifica tu </span>
              <span className="font-extrabold"> CÓDIGO</span>{" "}
            </div>
            <form
              className="flex w-full flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setStage(3);
              }}
            >
              <div className="mb-4 flex flex-col">
                <label htmlFor="code" className="mb-2">
                  Código
                </label>
                <Input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="Enter your code"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Siguiente
              </button>
            </form>
            <div className="flex w-full items-center">
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
              <span className="flex-shrink-0 px-1 text-gray-400">OR</span>
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
            </div>
            <div className="flex w-full flex-col justify-center gap-4">
              <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                Google
              </button>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Facebook
              </button>
              <hr />
            </div>
            <div>
              <span>
                Ya tienes una cuenta?
                <Link href="/login" className="font- px-2 text-black">
                  Ingresar
                </Link>
              </span>
            </div>
          </>
        )}

        {stage === 3 && (
          <>
            <div>
              <span className="font-semibold">Crea tu </span>
              <span className="font-extrabold"> CONTRASEÑA</span>{" "}
            </div>
            <form
              className="flex w-full flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setStage(1);
              }}
            >
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Contraseña
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Siguiente
              </button>
            </form>
            <div className="flex w-full items-center">
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
              <span className="flex-shrink-0 px-1 text-gray-400">OR</span>
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
            </div>
            <div className="flex w-full flex-col justify-center gap-4">
              <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                Google
              </button>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Facebook
              </button>
              <hr />
            </div>
            <div>
              <span>
                Ya tienes una cuenta?
                <Link href="/login" className="font- px-2 text-black">
                  Ingresar
                </Link>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
