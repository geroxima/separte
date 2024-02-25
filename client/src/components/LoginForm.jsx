import Image from "next/image";
import Link from "next/link";
const LoginForm = () => {
  return (
    <div className="my-12 flex w-full flex-row ">
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
        <div>
          <span className="font-extrabold"> HOLA!</span>{" "}
          <span className="font-semibold">Bienvenido de vuelta</span>
        </div>
        <form className="flex w-full flex-col">
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="mb-2">
                Contraseña
              </label>
              <Link href="/forgot-password" className="text-sm text-gray-400">
                Olvidaste la contraseña?
              </Link>
            </div>

            <input
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
            Login
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
            Nuevo en Se Parte?
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
