import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function HeroHeader  ({
  proyectosFinanciados = 50,
  inversiones = 100000,
  ProyectosRespaldo = 15000,
})  {
  return (
    <div className="container my-5 flex flex-col justify-around">
      <div className=" w-7/6 md:w-3/4 lg:w-full">
        <div className="my-8">
          <p className="text-6xl text-black">
            Descubre los mejores y más brillantes Proyectos
          </p>
        </div>
        <div className="my-8">
          <p className="text-xl">
            Apoye al trabajador creativo y vea la construcción del proyecto con cada actualización.
            <br />
            Respaldalo y Créelo.
          </p>
        </div>
      </div>
      <div className=" mt-5 bg-gray-100 ">
        <div>
          <p className="bg-white pb-2 text-center font-semibold text-xl text-black">
            Dentro del Último Día
          </p>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 px-6 py-6 text-center lg:grid-cols-3 lg:px-8">
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Proyectos Financiados
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {proyectosFinanciados}
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Trabajo Creativo
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                ${inversiones}
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Respaldo del Proyecto
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {ProyectosRespaldo}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
