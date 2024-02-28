import React from "react";
import Image from "next/image";
const NearYouCard = ({ campaign }) => {
  return (
    <div>
      <div className="col-span-8 row-span-2 flex flex-col rounded-lg shadow-lg ">
        <div>
          <Image
            src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
            alt="placeholder"
            width={300}
            height={150}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearYouCard;
