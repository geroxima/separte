import React from "react";
import RecommendedCard from "./RecommendedCard";
import NearYouCard from "./NearYouCard";

const data = [
  {
    title: "Campaña 1",
    fundraiserName: "Recaudación de fondos 1",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 1",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 1000,
    targetAmount: 5000,
    daysLeft: 10,
    backers: 50,
  },
  {
    title: "Campaña 2",
    fundraiserName: "Recaudación de fondos 2",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 2",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 2000,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaña 3",
    fundraiserName: "Recaudación de fondos 3",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 3",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 5500,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaña 4",
    fundraiserName: "Recaudación de fondos 4",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 4",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 1000,
    targetAmount: 5000,
    daysLeft: 10,
    backers: 50,
  },
  {
    title: "Campaña 5",
    fundraiserName: "Recaudación de fondos 5",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 5",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 2000,
    targetAmount: 6000,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaña 6",
    fundraiserName: "Recaudación de fondos 6",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 6",
    description: "lorem ipsum dolor sit amet",
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
