import FeatureCard from "@/components/FeaturedCard";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import { HeroHeader } from "@/components/HeroHeader";
import RecommendedCardList from "@/components/RecommendedCardList";
import NearYouProjects from "@/components/NearYouProjects";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroHeader />
      <FeaturedProjectSection />
      <RecommendedCardList />
      <NearYouProjects />
    </Fragment>
  );
}
