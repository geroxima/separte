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
            className="object-fit"
          />
        </div>
      </Link>

      <Link href={`/project/${campaign._id}`}>
        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaign.title}</h3>
          <p>{campaign.shortDescription}</p>
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
                  width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%`,
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
          <div className="flex items-center justify-start gap-8">
            <Image
              // src={campaign.fundraiserImg}
              src={
                "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph"
              }
              height={100}
              width={100}
              alt="profile-picture"
              className="rounded-full border-2 border-gray-400"
            />
            <div className="flex flex-col">
              <p className="font-bold">{campaign.fundraiserName}</p>
              <p className="text-sm">{campaign.fundraiserLocation}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedCard;
