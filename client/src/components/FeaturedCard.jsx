import Image from "next/image";
import React from "react";
import Link from "next/link";
const FeaturedCard = ({ campaigns }) => {
  return (
    <div className="my-8 flex flex-col gap-4 md:my-8 md:grid md:grid-cols-12 md:grid-rows-2">
      <div className="col-span-8 row-span-2 flex flex-col rounded-lg shadow-lg">
        <Link href={`/project/${campaigns[0]._id}`}>
          <div>
            <Image
              src={campaigns[0].img}
              alt="placeholder"
              width={600}
              height={900}
              className="object-fit w-full"
            />
          </div>
        </Link>

        <div className="flex h-auto flex-col justify-center gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[0].title}</h3>
          <p className="text-pretty">{campaigns[0].shortDescription}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[0].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[0].goalAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${Math.min((campaigns[0].currentAmount / campaigns[0].goalAmount) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[0].backers} donadores
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[0].daysLeft} días restantes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 flex max-w-full flex-col rounded-lg shadow-lg">
        <Link href={`/project/${campaigns[1]._id}`}>
          <div>
            <Image
              src={campaigns[1].img}
              alt="placeholder"
              width={300}
              height={200}
              className="object-fit w-full"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[1].title}</h3>
          <p className="text-pretty">{campaigns[1].shortDescription}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[1].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[1].goalAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${Math.min((campaigns[1].currentAmount / campaigns[1].goalAmount) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[1].backers} donadores
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[1].daysLeft} días restantes
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-1  flex max-w-full flex-col rounded-lg shadow-lg">
        <Link href={`/project/${campaigns[2]._id}`}>
          <div>
            <Image
              src={campaigns[2].img}
              alt="placeholder"
              width={300}
              height={200}
              className="object-fit w-full"
            />
          </div>
        </Link>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="m-0 text-xl font-bold">{campaigns[2].title}</h3>
          <p className="text-pretty">{campaigns[2].shortDescription}</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-xl font-semibold text-green-700">
                {campaigns[2].currentAmount}
              </span>
              <span className="text-xl font-semibold text-green-700">
                {campaigns[2].goalAmount}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-green-500 text-center text-xs text-white"
                style={{
                  width: `${Math.min(((campaigns[2].currentAmount + 1) / campaigns[2].goalAmount) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-bold text-gray-500">
                {campaigns[2].backers} donadores
              </span>
              <span className="text-sm font-bold text-gray-500">
                {campaigns[2].daysLeft} días restantes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
