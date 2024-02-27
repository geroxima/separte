import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-center gap-3">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h3 className="text-secondary-green font-bold text-6xl lg:text-6xl">404</h3>
        <h1 className="text-primary-green font-semibold text-2xl lg:text-6xl">
          ¡Vaya! Parece que esta página no existe
        </h1>
        <h3 className="font-medium text-xl lg:text-3xl mt-5 flex">
          No pudimos encontrar la página que estabas buscando
        </h3>
        <Link href="/" className="underline font-medium text-secondary-green text-xl mt-2 lg:text-2xl"> Vuelve a la página de inicio </Link>
      </div>
    </div>
  );
}
