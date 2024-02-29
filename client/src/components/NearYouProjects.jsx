import React from "react";
import RecommendedCard from "./RecommendedCard";
import NearYouCard from "./NearYouCard";

const NearYouProjects = ({ campaigns }) => {
  const data = campaigns.slice(); // Make a copy of the campaigns array

  // Fisher-Yates shuffle algorithm
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }

  const selectedProjects = data.slice(0, 3); // Select the first 3 shuffled elements

  return (
    <div className="my-20">
      <div className="text-3xl font-bold">Proyectos cerca de ti</div>
      <div className="my-4 flex w-full grid-cols-3 flex-col flex-wrap gap-4 md:grid">
        {selectedProjects.map((campaign) => {
          return <NearYouCard campaign={campaign} key={campaign.title} />;
        })}
      </div>
    </div>
  );
};

export default NearYouProjects;
