import React from "react";
import Image from "next/image";
const WhoWeAre = () => {
  return (
    <div className="w-xl container  my-5 flex flex-col justify-evenly">
      <div className="relative mx-auto">
        <Image
          src="/images/crowdfunding.jpg"
          alt="imagen principal"
          width={1200}
          height={200}
        />
        <div className="block bg-white md:absolute md:left-36 md:top-[80%] md:z-10 md:w-9/12">
          <div className="mt-8 px-3">
            <h2 className="mb-2 text-3xl font-bold">Quiénes Somos?</h2>
            <p className="text-lg">
              Sé Parte es una plataforma de crowdfunding paraguaya
              desarrollada como parte del proyecto grupal final del
              bootcamp Full Stack MERN de Coding Dojo. 
              Nos dedicamos a conectar emprendedores paraguayos
              con personas apasionadas que quieran contribuir a
              proyectos excepcionales.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-36 flex flex-row justify-around">
        <div className=" w-2/4">
          <h2 className="mb-2 text-3xl font-bold">Por qué Iniciamos?</h2>
          <p className="text-lg">
             Decidimos lanzar Sé Parte con la visión de ser un impulsor clave
             para la comunidad empresarial del Paraguay. Nuestro objetivo es
             facilitar el acceso a la financiación y a los recursos necesarios para que
             Los emprendedores pueden hacer realidad sus ideas. Creemos firmemente en
             el poder de la colaboración y la comunidad para crear un ambiente positivo y
             impacto duradero en nuestra sociedad. Con Sé Parte queremos crear un
             espacio donde los emprendedores pueden conectarse con personas apasionadas que
             quieran contribuir al crecimiento y desarrollo de excepcionales
             proyectos.
          </p>
        </div>
        <div className="w-2/4">
          <Image
            src="/images/financiamientocrowdfunding.png"
            alt="imagen lateral"
            width={600}
            height={400}
          />
        </div>
      </div>
      <h2 className="mt-28 text-3xl font-bold">
        Conoce a Nuestro <br /> Grupo
      </h2>
      <div className="mt-8 flex flex-col justify-between md:flex-row  ">
        <div className="container mt-5 flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Marcos Ferreira</p>
              <p className="text-lg">Full Stack Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Adan Alvarez</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Pablo Ortiz</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Maylen Zaracho</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
