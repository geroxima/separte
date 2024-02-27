import { format } from "morgan";
import Image from "next/image";
import { Share1Icon } from "@radix-ui/react-icons";
import { Share } from "next/font/google";
import { TagIcon } from "@/components/icons/tag"
import { LocationPinIcon } from "@/components/icons/location-pin";
import { RisingArrowIcon } from "@/components/icons/rising-icon";
import { DollarIcon } from "@/components/icons/dollar-icon";

export default function ProjectPage() {
  const campaingData = {
    title: "PC Building Project",
    description: "This is a project to build a PC for myself. I need a new PC to work and play games. I am a student and I can't afford a new PC. I need your help to make this project a reality. I will be very grateful for your help. Thank you very much.",
    currentAmount: 850000,
    targetAmount: 10000000,
    backers: 150,
    daysLeft: 10,
    fundraiserProfileImg: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fundraiserImg:
      "https://images.unsplash.com/photo-1625633979481-bcbaa10165f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fundraiserName: "Juan Perez",
    fundraiserLocation: "Asuncion, Paraguay",
    projectTopic: "Personal use",
    projectBannerImg: "https://images.unsplash.com/photo-1668554245790-bfdc72f0bb3d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    ]
  };

  function formatMoneyWithDots(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <section className="flex flex-col gap-y-5 mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-0 lg:ml-0">
      <section className="flex flex-col gap-y-5 mt-10">
        <h1 className="font-semibold text-text-color text-2xl">
          PC Building Project
        </h1>

        {/* Main Image */}

        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-10">
            <div className="relative h-[300px] md:h-[300px] lg:h-auto w-full overflow-hidden rounded-md border border-light-gray border-solid">
              <Image
                src={campaingData.fundraiserImg}
                alt="The campaign Image"
                fill
                objectFit="cover"
              />
          </div>
          {/* Aside Card */}

          <aside className="w-full md:w-full lg:w-2/5 rounded-md border-2 border-light-gray border-solid px-10 py-5 flex flex-col gap-y-5">
            <div>
              <div className="h-4 w-full rounded-full bg-gray-200 mb-2">
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
                pledged of Gs {formatMoneyWithDots(campaingData.targetAmount)}
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
              <h4 className="text-md text-text-color">days to go</h4>
            </div>
            <div className="flex flex-col my-3 gap-2">
              <button className="text-primary-green bg-secondary-green font-semibold rounded-md py-2 ">
                Back this project
              </button>
              <button className="text-text-color bg-light-gray font-semibold rounded-md py-2 flex justify-center gap-x-2 items-center">
                Share this project{" "}
                <Share1Icon aria-label="Share this Project" color="#2b2727" />{" "}
              </button>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="text-text-color font-medium ">{
            campaingData.fundraiserName} is organizing this fundraiser to benefit himself
          </h4>
          <div className="flex gap-5">
            <div>
              <h3 className="font-semibold">Created 1 day ago</h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 rounded-full self-stretch bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row gap-x-1 items-center">
              <TagIcon/>
              <h3 className="font-semibold">{campaingData.projectTopic}</h3>
            </div>
            <div className="inline-block h-auto min-h-[1em] w-0.5 rounded-full self-stretch bg-text-color opacity-100 dark:opacity-50"></div>
            <div className="flex flex-row gap-x-1 items-center">
              <LocationPinIcon/>
              <h3 className="font-semibold">{campaingData.fundraiserLocation}</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mb-5">
       
       
        <div className="flex flex-row mb-5 justify-between border-t-2 border-solid border-b-2 items-center">
          <h2 className="text-lg font-medium my-5">Campaign story</h2>
          <button className="text-primary-green bg-secondary-green font-semibold rounded-md py-2 px-5">
                Back this project
          </button>
        </div>





        <section className="flex flex-col md:flex-row lg:flex-row gap-y-5 md:gap-y-5 lg:gap-x-5">
          {/* Banner Image */}
          <article className="flex flex-col gap-y-5">
            <div className=" relative h-[300px] w-full overflow-hidden rounded-md border border-light-gray border-solid">
                <Image
                  src={campaingData.projectBannerImg}
                  alt="The campaign Image"
                  fill
                  objectFit="cover"
                />
            </div>

            <div>
              <p className="text-pretty font-normal text-text-color">{campaingData.description}</p>
            </div>
          </article>

          <aside className="h-full w-full md:w-full lg:w-3/5 bg-light-gray rounded-md flex flex-col py-5 px-2">
            <div className="items-center flex flex-col border border-gray-300 border-solid rounded-md py-2 overflow-hidden">
            <div className=" relative size-16 overflow-hidden rounded-full">
                <Image
                  src={campaingData.fundraiserProfileImg}
                  alt="The campaign Image"
                  fill
                  objectFit="cover"
                />
            </div>

              <h4 className="font-semibold text-text-color text-lg">{campaingData.fundraiserName}</h4>
              <h4 className="text-text-color font-light ">Project Founder</h4>
            </div>

            <div className=" border border-gray-300 border-solid rounded-md px-2 py-2 flex flex-col items-center mt-5">
              <div className="flex flex-row w-full gap-x-5 mb-3">
                <RisingArrowIcon/>
                <h4 className="text-text-icon font-medium">150 people just donated</h4>
              </div>
              {campaingData.latestDonations.map((donation, index) => (
                <div key={index} className="flex flex-row items-center gap-x-5 w-full border-b-[1px] border-text-color border-solid py-1">
                  <DollarIcon/>
                  <div className="flex flex-col gap-x-1">
                    <h3 className="font-medium text-sm">{donation.amount}</h3>
                    <h5 className="font-light text-sm">{donation.donorName}</h5>
                  </div>
                </div>
              ))}
             
              <div className="flex w-full justify-between mt-2">
                <button className="text-text-color text-xl md:text-sm lg:text-sm font-medium border-primary-green border-solid border rounded-md py-1 px-2">
                  See All
                </button>
                <button className="text-text-color text-xl md:text-sm lg:text-sm font-medium border-primary-green border-solid border rounded-md py-1 px-2">
                  See Top Donation
                </button>
              </div>
            </div>

          </aside>
        </section>


        
      </section>
    </section>
  );
}
