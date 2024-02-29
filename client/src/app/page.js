import FeatureCard from "@/components/FeaturedCard";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import { HeroHeader } from "@/components/HeroHeader";
import RecommendedCardList from "@/components/RecommendedCardList";
import NearYouProjects from "@/components/NearYouProjects";
import Image from "next/image";
import { Fragment } from "react";
import axios from "axios";

export default async function Home() {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns`,
  );

  const campaigns = data.data;

  return (
    <Fragment>
      <HeroHeader />
      <FeaturedProjectSection campaigns={campaigns} />
      <RecommendedCardList campaigns={campaigns} />
      <NearYouProjects campaigns={campaigns} />
    </Fragment>
  );
}
