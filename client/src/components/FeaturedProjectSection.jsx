import Link from "next/link";
import React from "react";
import FeaturedCard from "./FeaturedCard";

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
];

const FeaturedProjectSection = () => {
  return (
    <div className="my-10">
      <div className=" my-4 flex gap-2 text-sm font-bold">
        <Link href="/projects"> All </Link>
        <Link href="/projects"> Diseño y tecnologia </Link>
        <Link href="/projects"> Artes y ilustración </Link>
        <Link href="/projects"> Filmes </Link>
        <Link href="/projects"> Musica </Link>
        <Link href="/projects"> Artesanía </Link>
        <Link href="/projects"> Videojuegos </Link>
      </div>
      <div className="text-3xl font-bold">Proyectos destacados</div>
      <FeaturedCard campaigns={data} />
    </div>
  );
};

export default FeaturedProjectSection;
