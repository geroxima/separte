import React from "react";
import RecommendedCard from "./RecommendedCard";
import NearYouCard from "./NearYouCard";

const data = [
  {
    title: "Campaign 1",
    fundraiserName: "Fundraiser 1",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 1",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 1000,
    targetAmount: 5000,
    daysLeft: 10,
    backers: 50,
  },
  {
    title: "Campaign 2",
    fundraiserName: "Fundraiser 2",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 2",
    description: "Description 2",
    currentAmount: 2000,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaign 2",
    fundraiserName: "Fundraiser 2",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 2",
    description: "Description 2",
    currentAmount: 5500,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaign 1",
    fundraiserName: "Fundraiser 1",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 1",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 1000,
    targetAmount: 5000,
    daysLeft: 10,
    backers: 50,
  },
  {
    title: "Campaign 2",
    fundraiserName: "Fundraiser 2",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 2",
    description: "Description 2",
    currentAmount: 2000,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaign 2",
    fundraiserName: "Fundraiser 2",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Location 2",
    description: "Description 2",
    currentAmount: 5500,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
];
const NearYouProjects = () => {
  return (
    <div className="my-20">
      <div className="text-3xl font-bold">Proyectos cerca de ti</div>
      <div className="my-4 flex w-full grid-cols-3 flex-col flex-wrap gap-4 md:grid">
        {data.map((campaign) => {
          return <NearYouCard campaign={campaign} key={campaign.title} />;
        })}
      </div>
    </div>
  );
};

export default NearYouProjects;
