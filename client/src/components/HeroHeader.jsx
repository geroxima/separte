import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeroHeader = ({
  proyectosFinanciados = 50,
  inversiones = 100000,
  ProyectosRespaldo = 15000,
}) => {
  return (
    <div className="container my-5 flex flex-col justify-around">
      <div className="w-[705px]">
        <div className="my-8">
          <p className="text-6xl text-black">
            Discover The Best and brightest Projects
          </p>
        </div>
        <div className="my-8">
          <p className="text-xl">
            Support creative worker and see buildup of the project with each
            updates.
            <br />
            Back it and believe it.
          </p>
        </div>

        <div className="flex w-[600px] items-center">
          <input
            type="search"
            placeholder="Search Projects"
            className="w-full rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-gray-700 placeholder-gray-400 focus:border-[#07C051] focus:bg-white focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="ml-2 h-12 w-12 rounded-md bg-[#07C051] p-2 text-white"
          />
        </div>
      </div>
      <div className=" mt-5 h-[186px] bg-gray-100 ">
        <div>
          <p className="bg-white pb-2 text-center text-xl text-black">
            Within The Last Day
          </p>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 px-6 py-6 text-center lg:grid-cols-3 lg:px-8">
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Projects Funded
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                {proyectosFinanciados}
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Towards Creative Work
              </dt>
              <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                ${inversiones}
              </dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="text-lg leading-7 text-gray-600">
                Project Backing
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

export default HeroHeader;
