"use client";
import { format } from "morgan";
import Image from "next/image";
import { Share1Icon } from "@radix-ui/react-icons";
import { Share } from "next/font/google";
import { TagIcon } from "@/components/icons/tag";
import { LocationPinIcon } from "@/components/icons/location-pin";
import { RisingArrowIcon } from "@/components/icons/rising-icon";
import { DollarIcon } from "@/components/icons/dollar-icon";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProjectPage() {
  const { id } = useParams();

  const handlePay = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/donate/${id}`,
      {
        amount: 0,
      },
      {
        withCredentials: true,
      },
    );
    window.location.href = res.data.url;
  };

  const [campaingData, setCampaingData] = useState({
  });

  const getProjectData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/${id}`);
      console.log(res.data);
      setCampaingData(res.data);
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  }

  useEffect(() => {
    getProjectData();
  }, []);

  function formatMoneyWithDots(amount) {
    if (amount === undefined || amount === null) {
      return "0";
    }
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function getDaysLeft(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (daysLeft < 0) {
      return -1;
    }

    return daysLeft;
  }

  function daysSinceCreation(createdAt) {
    const currentDate = new Date();
    const creationDate = new Date(createdAt);
    const timeDifference = currentDate.getTime() - creationDate.getTime();
    const daysSinceCreation = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysSinceCreation;
  }

  return (
    <section className="ml-2 mr-2 flex flex-col gap-y-5 md:ml-2 md:mr-2 lg:ml-0 lg:mr-0">
      <section className="mt-10 flex flex-col gap-y-5">
        <h1 className="text-2xl font-semibold text-text-color">
          {campaingData.title}
        </h1>

        {/* Main Image */}

        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          <div className="relative h-[300px] w-full overflow-hidden rounded-md border border-solid border-light-gray md:h-[300px] lg:h-auto">
            /* <Image
              src={campaingData.img}
              alt="Imagen de la Campaña"
              fill
              objectFit="cover"
            /> 
            
          </div>

          {/* Aside Card */}

          <aside className="flex w-full flex-col gap-y-5 rounded-md border-2 border-solid border-light-gray px-10 py-5 md:w-full lg:w-2/5">
            <div>
              <div className="mb-2 h-4 w-full rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                  style={{
                    width: `${(campaingData.currentAmount / campaingData.goalAmount) * 100}%`,
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary-green">
                Gs {formatMoneyWithDots(campaingData.currentAmount)} 
              </h3>
              <h4 className="text-md text-text-color">
                recaudados de Gs {formatMoneyWithDots(campaingData.goalAmount)}
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-green">
                {campaingData.donorsCount}
              </h3>
              <h4 className="text-md text-text-color">donadores</h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-green">
                {  getDaysLeft(campaingData.deadline) != -1 ? getDaysLeft(campaingData.deadline) : "El tiempo límite ha terminado"}               
              </h3>
              <h4 className="text-md text-text-color">{getDaysLeft(campaingData.deadline) != -1 ? "días restantes" : ""}</h4>
            </div>
            <div className="my-3 flex flex-col gap-2">
              <button
                className="rounded-md bg-secondary-green py-2 font-semibold text-primary-green "
                onClick={handlePay}
              >
                Apoya este Proyecto
              </button>
              <button className="flex items-center justify-center gap-x-2 rounded-md bg-light-gray py-2 font-semibold text-text-color">
                Comparte este proyecto{" "}
                <Share1Icon aria-label="Share this Project" color="#2b2727" />{" "}
              </button>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="text-gray-600 font-light ">
            {campaingData.fundraiserName} está organizando esta recaudación de
            fondos para su beneficio
          </h4>

          <h4 className="font-medium text-pretty text-text-color w-full md:w-full lg:w-3/5">
            {campaingData.shortDescription}
          </h4>
         
          <div className="flex gap-5">
            <div>
              <h3 className="font-semibold">
                 Creado hace {daysSinceCreation(campaingData.createdAt)} {daysSinceCreation(campaingData.createdAt) > 1 ? "días" : "día"}
              </h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch rounded-full bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row items-center gap-x-1">
              <TagIcon />
              <h3 className="font-semibold">
                {campaingData.category}
              </h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch rounded-full bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row items-center gap-x-1">
              <LocationPinIcon />
              <h3 className="font-semibold">
                {campaingData.location}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 flex flex-col">
        <div className="mb-5 flex flex-row items-center justify-between border-b-2 border-t-2 border-solid">
          <h2 className="my-5 text-lg font-medium">Historia de la campaña</h2>
          <button
            className="rounded-md bg-secondary-green px-5 py-2 font-semibold text-primary-green"
            onClick={handlePay}
          >
            Apoya este proyecto
          </button>
        </div>

        <section className="flex flex-col gap-y-5 md:flex-row md:gap-y-5 lg:flex-row lg:gap-x-5">
          {/* Banner Image */}
          <article className="flex flex-col gap-y-5 ">

            <div>
              <p className="text-pretty font-normal text-text-color"  >
                {campaingData.description ? campaingData.description : ""}
              </p>
            </div>
          </article>

          <aside className="flex h-full w-full flex-col rounded-md bg-light-gray px-2 py-5 md:w-full lg:w-full min-w-[30%]">
            <div className="flex flex-col items-center overflow-hidden rounded-md border border-solid border-gray-300 py-2">
              <div className=" relative size-16 overflow-hidden rounded-full">
                <Image
                  src="https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg"
                  alt="Imagen del creador de la campaña"
                  fill
                  objectFit="cover"
                /> 
              </div>

              <h4 className="text-lg font-semibold text-text-color">
                {campaingData.fundraiserName} 
              </h4>
              <h4 className="font-light text-text-color ">
                Fundador del Proyecto
              </h4>
            </div>

            <div className=" mt-5 flex flex-col items-center rounded-md border border-solid border-gray-300 px-2 py-2">
              <div className="mb-3 flex w-full flex-row gap-x-5">
                <RisingArrowIcon />
                <h4 className="text-text-icon font-medium">
                  {campaingData.donorsCount} personas acaban de donar
                </h4>
              </div>
              {campaingData.donations && campaingData.donations.map((donation, index) => (
                <div
                  key={index}
                  className="flex w-full flex-row items-center gap-x-5 border-b-[1px] border-solid border-text-color py-1"
                >
                  <DollarIcon />
                  <div className="flex flex-col gap-x-1">
                    <h3 className="text-sm font-medium">{donation.amount}</h3>
                    <h5 className="text-sm font-light">{donation.donorName}</h5>
                  </div>
                </div> 
              ))}

              <div className="mt-2 flex w-full justify-between">
                <button className="rounded-md border border-solid border-primary-green px-2 py-1 text-xl font-medium text-text-color md:text-sm lg:text-sm">
                  Ver todo
                </button>
                <button className="rounded-md border border-solid border-primary-green px-2 py-1 text-xl font-medium text-text-color md:text-sm lg:text-sm">
                  Ver Donaciones Principales
                </button>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </section>
  );
}
