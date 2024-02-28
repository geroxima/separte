import Image from "next/image";
import React from "react";

const FeaturedCard = ({ campaigns }) => {
  return (
    <div className="my-8 flex flex-col gap-4 md:grid md:grid-cols-12 md:grid-rows-2">
      <div className="col-span-8 row-span-2 flex flex-col rounded-lg shadow-lg ">
        <div>
          <Image
            src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
            alt="placeholder"
            width={600}
            height={900}
            className="object-fit w-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[0].title}</h3>
          <p>{campaigns[0].description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[0].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[0].targetAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${(campaigns[0].currentAmount / campaigns[0].targetAmount) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[0].backers} backers
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[0].daysLeft} days left
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 flex max-w-full flex-col rounded-lg shadow-lg">
        <div>
          <Image
            src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className="object-fit w-full"
          />
        </div>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[1].title}</h3>
          <p>{campaigns[1].description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[1].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[1].targetAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${(campaigns[1].currentAmount / campaigns[1].targetAmount) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[1].backers} backers
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[1].daysLeft} days left
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-1  flex max-w-full flex-col rounded-lg shadow-lg">
        <div>
          <Image
            src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
            alt="placeholder"
            width={300}
            height={200}
            className="object-fit w-full"
          />
        </div>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[2].title}</h3>
          <p>{campaigns[2].description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[2].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[2].targetAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${(campaigns[2].currentAmount / campaigns[2].targetAmount) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[2].backers} backers
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[2].daysLeft} days left
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
