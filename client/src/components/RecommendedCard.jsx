import Image from "next/image";
import React from "react";

const campaignMockup = {
  title: "Campaign 2",
  fundraiserName: "Fundraiser 2",
  fundraiserImg: "img2.jpg",
  fundraiserLocation: "Location 2",
  description: "Description 2",
  currentAmount: 2000,
  targetAmount: 6000,
  daysLeft: 20,
  backers: 100,
};

const RecommendedCard = ({ campaign }) => {
  return (
    <div className="flex max-w-[300px] flex-col rounded-lg shadow-lg">
      <div>
        <Image
          src="https://img.freepik.com/fotos-premium/doctor-enfermera-haciendo-cirugia-paciente_51195-6233.jpg"
          alt="placeholder"
          width={300}
          height={200}
          className="object-fit"
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
        <span className="my-4 h-1 w-full border bg-gray-100"></span>
        <div className="flex items-center justify-start gap-8">
          <Image
            src={campaign.fundraiserImg}
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
    </div>
  );
};

export default RecommendedCard;
