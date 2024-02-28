import React from "react";
import Image from "next/image";
const WhoWeAre = () => {
  return (
    <div className="w-xl container  my-5 flex flex-col justify-evenly">
      <div className="relative mx-auto">
        <Image
          src="/images/crowdfunding.jpg"
          alt="imagen principal"
          width={1200}
          height={200}
        />
        <div className="block bg-white md:absolute md:left-36 md:top-[80%] md:z-10 md:w-9/12">
          <div className="mt-8 px-3">
            <h2 className="mb-2 text-3xl font-bold">Who Are We?</h2>
            <p className="text-lg">
              Sé Parte is a Paraguayan crowdfunding platform developed as part
              of the final group project of Coding Dojo's Full Stack MERN
              bootcamp. We are dedicated to connecting Paraguayan entrepreneurs
              with passionate people who want to contribute to exceptional
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-36 flex flex-row justify-around">
        <div className=" w-2/4">
          <h2 className="mb-2 text-3xl font-bold">Why We Started?</h2>
          <p className="text-lg">
            We decided to launch Sé Parte with the vision of being a key driver
            for the entrepreneurial community in Paraguay. Our goal is to
            facilitate access to financing and the necessary resources so that
            entrepreneurs can bring their ideas to reality. We firmly believe in
            the power of collaboration and community to create a positive and
            lasting impact on our society. With Sé Parte, we want to create a
            space where entrepreneurs can connect with passionate people who
            want to contribute to the growth and development of exceptional
            projects.
          </p>
        </div>
        <div className="w-2/4">
          <Image
            src="/images/financiamientocrowdfunding.png"
            alt="imagen lateral"
            width={600}
            height={400}
          />
        </div>
      </div>
      <h2 className="mt-28 text-3xl font-bold">
        Meet Our <br /> Team
      </h2>
      <div className="mt-8 flex flex-col justify-between md:flex-row  ">
        <div className="container mt-5 flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Maylen Zaracho</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Pablo Ortiz</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Marcos Ferreira</p>
              <p className="text-lg">Full Stack Dev</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-row justify-center sm:flex-col">
          <div className="flex h-[386px] w-[196px] flex-col bg-gray-100 text-center">
            <Image
              src="/images/Pablo.jpg"
              alt="imagen principal"
              width={200}
              height={200}
            />
            <div className="mt-7">
              <p className="text-xl font-bold">Adan Alvarez</p>
              <p className="text-lg">Frontend Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
