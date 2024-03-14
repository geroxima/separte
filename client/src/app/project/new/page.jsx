"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { app } from "@/lib/utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage(app);
import ProgressDots from "@/components/ProgressDots";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { useEffect } from "react";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
const NewProjectPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [stage, setStage] = useState(1);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    reason: "",
    amount: "",
    campaignName: "",
    campaignDescription: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCampaign = {
      category: formData.reason,
      shortDescription: formData.campaignDescription,
      deadline: "2024-10-10",
      location: "Encarnacion",
      goalAmount: formData.amount,
      title: formData.campaignName,
      img: formData.img,
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/create`,
        newCampaign,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        toast({
          title: "Campaña creada exitosamente!",
          description: "Redirigiendo a la pagina del proyecto",
        });
        router.push(`/project/${res.data._id}`);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Ha ocurrido un error :c",
          description: "Sentimos mucho las inconveniencias",
        });
      });
  };

  const handleInputChange = (e) => {
    if (e?.target) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        reason: e,
      });
    }
  };

  useEffect(() => {
    const upload = () => {
      const name = Date.now() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({
              ...formData,
              img: downloadURL,
            });
          });
        },
      );
    };
    file && upload();
  }, [file]);

  return (
    <div className="mx-auto my-12 flex max-w-3xl flex-row  ">
      <div className="flex-1">
        <Image
          src="/images/manos_que_ayudan.png"
          alt="Imagen de login"
          width={500}
          height={500}
          className="object-fill"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 overflow-auto px-20 py-8">
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
                <label htmlFor="name" className="mb-2">
                  ¿Cual es tu nombre?
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="location" className="mb-2">
                  ¿Donde vives?
                </label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="reason" className="mb-2">
                  ¿Cual es la razon de tu campaña/colecta?
                </label>
                <Select
                  value={formData.reason}
                  onValueChange={handleInputChange}
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
                className="rounded-md bg-primary-green px-4 py-2 text-text-whtie hover:seconday-green"
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
                <label htmlFor="amount" className="mb-2">
                  ¿Cuanto dinero necesitas?
                </label>
                <Input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu monto en guaranies"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
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
                  className="w-1/2 rounded-md bg-red-200 px-4 py-2 text-red-600 hover:bg-red-400"
                >
                  Atras
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-md bg-primary-green px-4 py-2 text-white hover:bg-secondary-green"
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
                <label htmlFor="campaignName" className="mb-2">
                  ¿Cual es el nombre de tu campaña?
                </label>
                <Input
                  type="text"
                  id="campaignName"
                  name="campaignName"
                  value={formData.campaignName}
                  onChange={handleInputChange}
                  placeholder=""
                  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="campaignDescription" className="mb-2">
                  ¿De que se trata tu campaña?
                </label>
                <Textarea
                  name="campaignDescription"
                  id="campaignDescription"
                  value={formData.campaignDescription}
                  onChange={handleInputChange}
                  placeholder=""
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="file" className="mb-2">
                  Añade una imagen de portada
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  className="rounded-md border-2 border-dashed border-gray-300 p-4"
                />
              </div>

              <button
                type="submit"
                className="rounded-md bg-primary-green px-4 py-2 text-white hover:bg-secondary-green"
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
