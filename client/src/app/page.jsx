import Image from "next/image";
import { Fragment } from "react";
import { HeroHeader } from "@/components/HeroHeader";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <Fragment>
      <WhoWeAre />
      {/* <HeroHeader/> */}
    </Fragment>
  );
}
