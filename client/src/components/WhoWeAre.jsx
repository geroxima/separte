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
      <div className="mt-40 flex flex-row justify-around">
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
            className="w-full"
          />
        </div>
      </div>
      <h2 className="mt-28 text-3xl font-bold">
        Meet Our <br /> Team
      </h2>
      <div className="container mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/Pablo.jpg"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full"
                />
                <h5 className="mb-2 text-xl font-bold">Pablo Ortiz</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/Pablo.jpg"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full"
                />
                <h5 className="mb-2 text-xl font-bold">Marcos Ferreira</h5>
                <p className="text-lg">Full Stack Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/Pablo.jpg"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full"
                />
                <h5 className="mb-2 text-xl font-bold">Adan Alvarez</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 text-center">
              <div className="p-4">
                <Image
                  src="/images/Pablo.jpg"
                  alt="imagen principal"
                  width={200}
                  height={200}
                  className="mb-3 w-full"
                />
                <h5 className="mb-2 text-xl font-bold">Maylen Zaracho</h5>
                <p className="text-lg">Frontend Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
