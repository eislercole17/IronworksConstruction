import Image from "next/image";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { useRef } from "react";
import Head from 'next/head';
// import MainText from "@/components/MainText";
import Services from "@/components/Services.jsx";
export default function Home() {
  const scrollTo = () => {
    const section = document.getElementById("section1");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <main
      className={"flex w-full h-full flex-col items-center justify-between"}
    >
      <Head>
    
        <title>Ironworks Construction</title>
        <meta name="title" content="Ironworks Construction" />
        <meta name="description" content="Your premier choice for oilfield hauling services. We offer Flat deck hauling, truck and trailer hauling and picker service with lifting capabilities of up to 8000lbs," />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ironworks.construction/" />
        <meta property="og:title" content="Ironworks Construction" />
        <meta property="og:description" content="Your premier choice for oilfield hauling services. We offer Flat deck hauling, truck and trailer hauling and picker service with lifting capabilities of up to 8000lbs," />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ironworks.construction/" />
        <meta property="twitter:title" content="Ironworks Construction" />
        <meta property="twitter:description" content="Your premier choice for oilfield hauling services. We offer Flat deck hauling, truck and trailer hauling and picker service with lifting capabilities of up to 8000lbs," />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

      </Head>
      
      <div
        className="w-full min-h-screen relative grid lg:grid-cols-[2fr,2fr]"
        id="section1"
      >
        <Nav />
        <div className="w-full h-full lg:bg-zinc-100 max-lg:bg-[image:url('/Backround.jpg')] bg-no-repeat bg-cover bg-[40%] relative">
          <div className="w-full h-full flex flex-col p-10 lg:p-16 items-center justify-center max-lg:bg-[#000a] lg:text-black max:md-text-white gap-4">
            <h1 className="text-5xl xl:text-7xl font-extrabold drop-shadow-md">
              Your premier choice for oilfield hauling services
              <span className="text-[#FFE633]">.</span>
            </h1>
            <div className="w-full flex">
              <Link href="/contact">
                <button className="bg-[#FFE633] hover:bg-[#CDB92A] rounded-lg p-4 py-3 shadow-md flex gap-2 font-bold items-center justify-center max-sm:text-black">
                  <span>Request a Quote</span>
                  <div className="w-4 h-4 scale-[2] -rotate-90">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
            <div className="w-24 h-24 absolute left-1/3.5 -translate-x-1/2 bottom-8 motion-reduce: animate-bounce">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
              >
                <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-full relative">
          <Image
            src="/Backround.jpg"
            fill
            alt=""
            className="object-cover object-[30%] -scale-x-100"
          />
        </div>
      </div>

      <Services />
    </main>
  );
}

function Nav() {
  return (
    <div className="absolute left-0 top-0 w-full h-24 z-50">
      <div className="flex h-full p-4 pr-8 items-center text-white lg:text-black">
        <div className="flex h-full items-center gap-2">
          <div className="relative h-full aspect-square">
            <Image src="/logo.png" alt="logo" fill />
          </div>
          <span className="text-3xl font-bold">Ironworks</span>
        </div>
      </div>
    </div>
  );
}
