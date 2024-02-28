"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressDots from "@/components/ProgressDots";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
const NewProjectPage = () => {
  const [stage, setStage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="mx-auto my-32 flex max-w-3xl flex-row ">
      <div className="w-full">
        <Image
          src="/images/manos_que_ayudan.png"
          alt="Imagen de login"
          width={500}
          height={500}
          className="object-fit h-full"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 px-20 py-8">
        <ProgressDots stage={stage} />
        {stage === 1 && (
          <>
            <div>
              <span className="font-semibold">Vamos a </span>
              <span className="font-extrabold"> EMPEZAR</span>{" "}
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
                  ¿Cual es tu nombre?
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className="mb-2">
                  ¿Donde vives?
                </label>
                <Input
                  type="location"
                  id="location"
                  name="location"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className="mb-2">
                  ¿Cual es la razon de tu campaña/colecta?
                </label>
                <Select
                //   onValueChange={field.onChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una razon" />
                  </SelectTrigger>

                  <SelectContent className="bg-slate-50">
                    <SelectGroup label="Categorias">
                      <SelectItem value="arte">Arte</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="solidaridad">
                        Campaña Solidaria
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Siguiente
              </button>
            </form>
          </>
        )}
        {stage === 2 && (
          <>
            <div>
              <span className="font-semibold"> Define tu </span>
              <span className="font-extrabold"> META</span>{" "}
            </div>
            <form
              className="flex w-full flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setStage(3);
              }}
            >
              <div className="mb-4 flex flex-col ">
                <label htmlFor="code" className="mb-2">
                  ¿Cuanto dinero necesitas?
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu monto en dolares"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2 rounded-md bg-blue-200 p-2">
                <p className="text-xs">
                  Ten en cuenta que las tarifas de transaccion, incluyendo
                  tarifas de tarjetas de credito y debito son deducidas de cada
                  donacion. Tambien asegurate de tener una cuenta bancaria y una
                  direccion de facturacion en el pais donde te encuentras.
                  Tambien al continuar aceptas los terminos de uso y politicas
                  de la plataforma
                </p>
                <div className="font-bold">Tengo por los menos 18 años</div>
                <div className="font-bold">
                  Puedo verificar mi numero de cedula o documento de identidad
                </div>
                <div className="font-bold">
                  Puedo verificar la veracidad del proyecto
                </div>
              </div>

              <div className="my-4 flex gap-4">
                <button
                  onClick={() => setStage(1)}
                  type="button"
                  className="w-1/2 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Atras
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Siguiente
                </button>
              </div>
            </form>
          </>
        )}

        {stage === 3 && (
          <>
            <div>
              <span className="font-semibold">Crea tu </span>
              <span className="font-extrabold"> CAMPAÑA</span>{" "}
            </div>
            <form className="flex w-full flex-col" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  ¿Cual es el nombre de tu campaña?
                </label>
                <Input
                  type="text"
                  id="password"
                  name="password"
                  placeholder=""
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  ¿De que se trata tu campaña?
                </label>
                <Textarea placeholder="" />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Añade una imagen de portada
                </label>
                <input
                  type="file"
                  className="rounded-md border-2 border-dashed border-gray-300 p-4"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Siguiente
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewProjectPage;
