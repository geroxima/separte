import React from "react";
import RecommendedCard from "./RecommendedCard";

const RecommendedCardList = ({ campaigns }) => {
  const data = campaigns.slice(0, 3);
  return (
    <div className="my-20">
      <div className="text-3xl font-bold">Proyectos Recomendados</div>
      <div className="my-4 flex w-full flex-col flex-wrap gap-4 md:flex-row">
        {data.map((campaign) => {
          return <RecommendedCard campaign={campaign} key={campaign.title} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedCardList;
