import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";
export default function Main() {
  // Create state to handle the flip status of each card
  const [flipped, setFlipped] = useState([false, false, false]);

  // Toggle flip status for a specific card
  const toggleFlip = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <main className="flex w-full h-full">
      <div className="w-full min-h-screen bg-white">
        <Nav />
        <div className="grid grid-cols-1 justify-items-center">
          <h1 className="text-black text-6xl mt-[200px] font-extrabold drop-shadow-xl">
            Services
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 w-full place-items-center mt-2">
          {/* Card 1 */}
          <div
            className={`relative max-lg:max-w-sm w-full p-6 h-64 border border-gray-200 rounded-lg shadow-lg bg-zinc-200 mt-4 transform-style-preserve-3d transition-transform duration-500 ${
              flipped[0] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(0)}
          >
            <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-3xl">
                Flat Deck
                <h5 className="text-sm absolute">(Tap for more info)</h5>
              </h5>
            </div>
            <div className="absolute inset-0 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 lg:text-xl p-4 text-2xl">
                Perfect for smaller loads and dimensions, our flat deck trucks
                ensure efficient and reliable transportation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative max-lg:max-w-sm w-full p-6 h-64 border border-gray-200 rounded-lg shadow-lg bg-zinc-200 mt-4 transform-style-preserve-3d transition-transform duration-500 ${
              flipped[1] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(1)}
          >
            <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-3xl">
                Truck/Trailer
                <h5 className="text-sm absolute">(Tap for more info)</h5>
              </h5>
            </div>
            <div className="absolute inset-0 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-2xl">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 lg:text-xl p-4">
                Need to transport larger loads and dimensions? Our versatile
                truck/trailer combinations are designed to handle your hotshot and
                light oilfield hauling requirements with ease.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`relative max-lg:max-w-sm w-full p-6 h-64 border border-gray-200 rounded-lg shadow-lg bg-zinc-200 mt-4 transform-style-preserve-3d transition-transform duration-500 ${
              flipped[2] ? "rotate-y-180" : ""
            }`}
            onClick={() => toggleFlip(2)}
          >
            <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-3xl">
                Picker Service
                <h5 className="text-sm absolute">(Tap for more info)</h5>
              </h5>
            </div>
            <div className="absolute inset-0 backface-hidden transform rotate-y-180 flex flex-col justify-center items-center text-2xl">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-500 lg:text-xl p-4">
                With lifting capabilities of up to 8000lbs, our picker service
                offers a reliable solution for various light-duty lifting
                operations, adaptable to diverse situations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 justify-center flex">
          <Link href="/contact">
            <button className="bg-[#FFE633] hover:bg-[#CDB92A] rounded-lg p-4 py-3 shadow-md font-bold items-center justify-center text-black mb-8">
              Request a Quote
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
function Nav() {
  return (
    <div className="absolute left-0 top-0 w-full h-24 z-50">
      <Link href="/">
        <button className="text-black bg-[#FFE633] hover:bg-[#CDB92A] rounded-md p-4 py-2 shadow-lg font-bold float-right mt-8 mr-8">
          Home
        </button>
      </Link>
      {/* Logo/text */}
      <div className="flex h-full p-4 pr-8 items-center text-black">
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
