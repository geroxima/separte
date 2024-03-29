import Link from "next/link";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const data = [
  {
    title: "Campaña 1",
    fundraiserName: "Recaudación de fondos 1",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 1",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 1000,
    targetAmount: 500,
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
    targetAmount: 600,
    daysLeft: 20,
    backers: 100,
  },
  {
    title: "Campaña 3",
    fundraiserName: "Recaudación de fondos 3",
    fundraiserImg:
      "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=sph",
    fundraiserLocation: "Ubicación 2",
    description: "lorem ipsum dolor sit amet",
    currentAmount: 5500,
    targetAmount: 1000,
    daysLeft: 20,
    backers: 100,
  },
];

const FeaturedProjectSection = ({ campaigns }) => {
  return (
    <div className="my-10">
      <div className=" my-4 flex gap-2 text-sm font-bold">
        <Link href="/projects" className="block p-2 text-center rounded-full text-white bg-primary-green border border-primary-green mx-2"> Todo </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Diseño y Tecnologia </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Arte y Ilustración </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Películas/Cortos </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Musica </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Artesanía </Link>
        <Link href="/projects" className="block p-2 text-center rounded-full bg-primary-white border border-primary-green mx-2"> Videojuegos </Link>
      </div>
      <div className="text-3xl font-bold">Proyectos Destacados</div>
      <FeaturedCard campaigns={campaigns} />
    </div>
  );
};

export default FeaturedProjectSection;
