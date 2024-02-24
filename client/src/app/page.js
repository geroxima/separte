import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header titleButton="How it works" titleLink="Sign in" />
      <Footer />
    </Fragment>
  );
}
