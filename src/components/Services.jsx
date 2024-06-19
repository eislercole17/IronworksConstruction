import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Services() {
  return (
    <div className="w-full min-h-screen h-full relative grid lg:grid-cols-[2fr,2fr]">
      <div className="w-full hidden lg:flex h-full bg-[image:url('/about-bg.jpeg')] bg-no-repeat bg-cover bg-[40%] relative "></div>

      <div className="w-full h-full bg-zinc-100 flex flex-col items-center justify-start pb-16">
        <h1 className="text-black text-7xl mt-16 font-extrabold drop-shadow-md">
          Why Us?
        </h1>
        {/* Card One  */}
        <div class="max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-zinc-200 mt-10">
          <a href="/service">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-Black sm:text-3xl">
              Diverse Range of Services:
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-500 sm:text-xl">
            From flat deck hauling to picker service, we offer a comprehensive
            range of services to meet all your transportation and lifting
            requirements..
          </p>
          <Link
            href="/service"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#FFE633] hover:bg-[#CDB92A] rounded-lg focus:ring-4 focus:outline-none xl:px-4 lg:py-3 lg:text-lg"
          >
            Services
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>

        {/*Card 2*/}
        <div class="max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-zinc-200 mt-4">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black sm:text-3xl xs:text-3xl">
              Flexibility and Customization:
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-500 sm:text-xl">
            We understand that every job is unique. That's why we offer flexible
            hauling options and customized solutions tailored to your specific
            needs.
          </p>
        </div>

        {/* Card 3 */}
        <div class="max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-zinc-200 mt-4">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-Black sm:text-3xl">
              Industry Expertise:
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-500 text-xl">
            With years of experience in the industry, our team brings a wealth
            of expertise and knowledge to every project. You can trust us to get
            the job done right the first time, every time.
          </p>
        </div>
      </div>
    </div>
  );
}
