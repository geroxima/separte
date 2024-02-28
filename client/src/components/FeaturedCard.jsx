import Image from "next/image";
import React from "react";

const FeatureCard = ({ campaign }) => {
  return (
    <div className="w-xl container mx-auto my-5 flex flex-col items-center justify-center md:flex-row md:justify-around   ">
      <div className=" flex w-3/5 flex-col rounded-lg shadow-lg ">
        <div>
          <Image
            src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
            alt="placeholder"
            width={900}
            height={400}
            className="object-fit w-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaign.title}</h3>
          <p>{campaign.description}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaign.currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaign.targetAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaign.backers} backers
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaign.daysLeft} days left
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex w-3/5  flex-col  md:w-1/3">
        <div className=" my-3 flex max-w-full flex-col rounded-lg shadow-lg">
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
            <h3 className="m-0 text-xl font-bold">{campaign.title}</h3>
            <p>{campaign.description}</p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-xl font-semibold text-green-700">
                  {campaign.currentAmount}
                </span>
                <span className="text-xl font-semibold text-green-700">
                  {campaign.targetAmount}
                </span>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                  style={{
                    width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-bold text-gray-500">
                  {campaign.backers} backers
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {campaign.daysLeft} days left
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-3 flex max-w-full flex-col rounded-lg shadow-lg">
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
            <h3 className="m-0 text-xl font-bold">{campaign.title}</h3>
            <p>{campaign.description}</p>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-xl font-semibold text-green-700">
                  {campaign.currentAmount}
                </span>
                <span className="text-xl font-semibold text-green-700">
                  {campaign.targetAmount}
                </span>
              </div>
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                  style={{
                    width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-bold text-gray-500">
                  {campaign.backers} backers
                </span>
                <span className="text-sm font-bold text-gray-500">
                  {campaign.daysLeft} days left
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
