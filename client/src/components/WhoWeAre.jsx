import React from "react";
import Image from "next/image";
const WhoWeAre = () => {
  return (
    <div className="w-xl container  my-5 flex flex-col justify-evenly">
      <div className="relative mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1614850523503-6e4ef43bee40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="imagen principal"
          width={1200}
          height={200}
        />
        <div className="block bg-white md:absolute md:left-36 md:top-[80%] md:z-10 md:w-9/12">
          <div className="mt-8 px-3">
            <h2 className="mb-2 text-3xl font-bold text-center">¿Quiénes Somos?</h2>
            <p className="text-lg text-text-color text-pretty">
              Sé Parte es una plataforma de crowdfunding paraguaya desarrollada
              como parte del proyecto grupal final del bootcamp Full Stack MERN
              de Coding Dojo. Nos dedicamos a conectar emprendedores paraguayos
              con personas apasionadas que quieran contribuir a proyectos
              excepcionales.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 flex flex-row justify-around">
        <div className=" w-2/4">
          <h2 className="mb-2 text-3xl font-bold">Por qué Iniciamos?</h2>
          <p className="text-lg text-pretty text-text-color mr-2">
            Decidimos lanzar Sé Parte con la visión de ser un impulsor clave
            para la comunidad empresarial del Paraguay. Nuestro objetivo es
            facilitar el acceso a la financiación y a los recursos necesarios
            para que Los emprendedores pueden hacer realidad sus ideas. Creemos
            firmemente en el poder de la colaboración y la comunidad para crear
            un ambiente positivo y impacto duradero en nuestra sociedad. Con Sé
            Parte queremos crear un espacio donde los emprendedores pueden
            conectarse con personas apasionadas que quieran contribuir al
            crecimiento y desarrollo de excepcionales proyectos.
          </p>
        </div>
        <div className="w-2/4 items-center flex justify-center">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_105_666)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z" fill="url(#paint0_linear_105_666)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_105_666" x1="14" y1="26" x2="179" y2="179.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6EE7B7"/>
      <stop offset="1" stop-color="#3CB371"/>
    </linearGradient>
    <clipPath id="clip0_105_666">
      <rect width="200" height="200" fill="white"/>
    </clipPath>
  </defs>
</svg>

        </div>
      </div>
      <h2 className="mt-28 text-3xl font-bold">
        Conoce a Nuestro Grupo
      </h2>
      <div className="container mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/pablo.png"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full rounded-md"
                />
                <h5 className="mb-2 text-xl font-bold">Pablo Ortiz</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/andres.png"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full rounded-md"
                />
                <h5 className="mb-2 text-xl font-bold">Marcos Ferreira</h5>
                <p className="text-lg">Full Stack Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/gero.png"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full rounded-md"
                />
                <h5 className="mb-2 text-xl font-bold">Adan Alvarez</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/may.png"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full rounded-md h-75%"
                />
                <h5 className="mb-2 text-xl font-bold">Maylen Zaracho</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
