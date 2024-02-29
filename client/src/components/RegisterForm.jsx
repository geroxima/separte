"use client";
import Image from "next/image";
import Link from "next/link";
import ProgressDots from "./ProgressDots";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const [stage, setStage] = useState(1);
  const GoogleIcon = () => {return(<svg width="12" height="12.28" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>)}


  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, form)
      .then((res) => {
        console.log(res.data);
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary-green px-4 py-2 text-text-color hover:bg-secondary-green hover:text-white"
              >
                Siguiente
              </button>
            </form>
            <div className="flex w-full items-center">
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
              <span className="flex-shrink-0 px-1 text-gray-400">Acceder con</span>
              <span className="border-1 flex-1 border-solid border-gray-200"></span>
            </div>
            <div className="flex w-full flex-col justify-center gap-4">
            <button
            className="rounded-md border border-text-color border-solid items-center  justify-center bg-white px-4 py-2 text-text-color font-medium hover:bg-gray-100 flex gap-x-2"
          >
            <GoogleIcon/>
            Google
          </button>
              {/* <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Facebook
              </button> */}
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
              <span className="font-semibold">Registra tu </span>
              <span className="font-extrabold"> INFORMACION PERSONAL</span>{" "}
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
                  Nombre
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="code" className="mb-2">
                  Apellido
                </label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                  value={form.lastName}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="code" className="mb-2">
                  Direccion
                </label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Ingresa tu direccion"
                  value={form.address}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary-green px-4 py-2 text-text-color hover:bg-secondary-green hover:text-white"
              >
                Siguiente
              </button>
            </form>

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
            <form className="flex w-full flex-col" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Contraseña
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green-500"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary-green px-4 py-2 text-text-color hover:bg-secondary-green hover:text-white"
              >
                Siguiente
              </button>
            </form>

            <div>
              <span>
                ¿Ya tienes una cuenta?
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
