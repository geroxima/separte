"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useSession } from "./hooks/useSession";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const { login } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        {
          userLogin: email,
          password,
        },
        { withCredentials: true },
      );
      console.log("Data", data);
      login(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      window.open(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
        "_self",
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithub = async (e) => {
    e.preventDefault();
    try {
      window.open(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github`,
        "_self",
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto my-12 flex max-w-3xl flex-row ">
      <div className="flex-1">
        <Image
          src="/images/login.png"
          alt="Imagen de Login"
          width={500}
          height={500}
          className="object-fill"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-8">
        <div>
          <span className="font-extrabold"> HOLA!</span>{" "}
          <span className="font-semibold">Bienvenido de vuelta</span>
        </div>
        <form className="flex w-full flex-col" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="mb-2">
                Contraseña
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-400">
                ¿Olvidaste la contraseña?
              </Link>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="flex w-full items-center">
          <span className="border-1 flex-1 border-solid border-gray-200"></span>
          <span className="flex-shrink-0 px-1 text-gray-400">Acceder con</span>
          <span className="border-1 flex-1 border-solid border-gray-200"></span>
        </div>
        <div className="flex w-full flex-col justify-center gap-4">
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={handleGoogle}
          >
            Google
          </button>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={handleGithub}
          >
            Github
          </button>
          <hr />
        </div>
        <div>
          <span>
          ¿Nuevo en Se Parte?
            <Link href="/register" className="font- px-2 text-black">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
