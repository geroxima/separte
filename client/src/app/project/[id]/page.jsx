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
export default function ProjectPage() {
  const { id } = useParams();
  const handlePay = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/donate/${id}`,
      {
        amount: 1000,
      },
      {
        withCredentials: true,
      },
    );
    window.location.href = res.data.url;
  };
  const campaingData = {
    title: "Proyecto de construcción de PC",
    description:
      "Este es un proyecto para construir una PC para mí. Necesito una PC nueva para trabajar y jugar. Soy estudiante y no puedo permitirme una PC nueva. Necesito tu ayuda para hacer realidad este proyecto. Estaré muy agradecido por tu ayuda. Muchas gracias.",
    currentAmount: 850000,
    targetAmount: 10000000,
    backers: 150,
    daysLeft: 10,
    fundraiserProfileImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fundraiserImg:
      "https://images.unsplash.com/photo-1625633979481-bcbaa10165f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fundraiserName: "Juan Perez",
    fundraiserLocation: "Asuncion, Paraguay",
    projectTopic: "Uso Personal",
    projectBannerImg:
      "https://images.unsplash.com/photo-1668554245790-bfdc72f0bb3d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    latestDonations: [
      {
        amount: 40000,
        donorName: "Adán Alvarez",
      },
      {
        amount: 55000,
        donorName: "Gerónimo Ramos",
      },
      {
        amount: 87000,
        donorName: "Leonel Alvarez",
      },
    ],
  };

  function formatMoneyWithDots(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <section className="ml-2 mr-2 flex flex-col gap-y-5 md:ml-2 md:mr-2 lg:ml-0 lg:mr-0">
      <section className="mt-10 flex flex-col gap-y-5">
        <h1 className="text-2xl font-semibold text-text-color">
          Proyecto de construcción de PC
        </h1>

        {/* Main Image */}

        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          <div className="relative h-[300px] w-full overflow-hidden rounded-md border border-solid border-light-gray md:h-[300px] lg:h-auto">
            <Image
              src={campaingData.fundraiserImg}
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
                    width: `${(campaingData.currentAmount / campaingData.targetAmount) * 100}%`,
                  }}
                ></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary-green">
                Gs {formatMoneyWithDots(campaingData.currentAmount)}
              </h3>
              <h4 className="text-md text-text-color">
                prenda de Gs {formatMoneyWithDots(campaingData.targetAmount)}
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-green">
                {campaingData.backers}
              </h3>
              <h4 className="text-md text-text-color">backers</h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-green">
                {campaingData.daysLeft}
              </h3>
              <h4 className="text-md text-text-color">días restantes</h4>
            </div>
            <div className="my-3 flex flex-col gap-2">
              <button className="rounded-md bg-secondary-green py-2 font-semibold text-primary-green ">
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
          <h4 className="font-medium text-text-color ">
            {campaingData.fundraiserName} está organizando esta recaudación de
            fondos para su beneficio
          </h4>
          <div className="flex gap-5">
            <div>
              <h3 className="font-semibold">Creado hace 1 día</h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch rounded-full bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row items-center gap-x-1">
              <TagIcon />
              <h3 className="font-semibold">{campaingData.projectTopic}</h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 self-stretch rounded-full bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row items-center gap-x-1">
              <LocationPinIcon />
              <h3 className="font-semibold">
                {campaingData.fundraiserLocation}
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 flex flex-col">
        <div className="mb-5 flex flex-row items-center justify-between border-b-2 border-t-2 border-solid">
          <h2 className="my-5 text-lg font-medium">Historia de la campaña</h2>
          <button className="rounded-md bg-secondary-green px-5 py-2 font-semibold text-primary-green">
            Apoya este proyecto
          </button>
        </div>

        <section className="flex flex-col gap-y-5 md:flex-row md:gap-y-5 lg:flex-row lg:gap-x-5">
          {/* Banner Image */}
          <article className="flex flex-col gap-y-5">
            <div className=" relative h-[300px] w-full overflow-hidden rounded-md border border-solid border-light-gray">
              <Image
                src={campaingData.projectBannerImg}
                alt="Imagen de la campaña"
                fill
                objectFit="cover"
              />
            </div>

            <div>
              <p className="text-pretty font-normal text-text-color">
                {campaingData.description}
              </p>
            </div>
          </article>

          <aside className="flex h-full w-full flex-col rounded-md bg-light-gray px-2 py-5 md:w-full lg:w-3/5">
            <div className="flex flex-col items-center overflow-hidden rounded-md border border-solid border-gray-300 py-2">
              <div className=" relative size-16 overflow-hidden rounded-full">
                <Image
                  src={campaingData.fundraiserProfileImg}
                  alt="Imagen de la campaña"
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
                  150 personas acaban de donar
                </h4>
              </div>
              {campaingData.latestDonations.map((donation, index) => (
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
