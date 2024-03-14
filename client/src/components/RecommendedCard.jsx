import Image from "next/image";
import React from "react";
import Link from "next/link";

const RecommendedCard = ({ campaign }) => {
  return (
    <div className="flex flex-1 flex-col rounded-lg shadow-lg">
      <Link href={`/project/${campaign._id}`} className="self-center">
        <div className="self-center">
          <Image
            src={campaign.img}
            alt="placeholder"
            width={300}
            height={200}
            className="max-h-[200px] w-full"
          />
        </div>
      </Link>

      <Link href={`/project/${campaign._id}`}>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaign.title}</h3>
          <p className="min-h-[300px] text-pretty">
            {campaign.shortDescription}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaign.currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaign.goalAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaign.donorsCount} donadores
              </span>
              <span className="text-sm font-bold text-gray-500">
                5 días restantes
                {/* Aca hace falta el calculo de dias restantes */}
              </span>
            </div>
          </div>
          <span className="my-4 h-1 w-full border bg-gray-100"></span>
          <div className="flex items-center justify-between gap-8 justify-self-end">
            <div className="flex flex-col">
              <p className="font-bold">{campaign.fundraiserName}</p>
              <p className="text-sm">{campaign.location}</p>
            </div>
            <div className="relative ml-auto size-16 overflow-hidden rounded-full">
              <Image
                src="https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148360340.jpg"
                alt="Imagen del creador de la campaña"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedCard;
