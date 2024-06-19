import Image from "next/image";

export function Nav({ goToPage }: { goToPage: (number: number) => void }) {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={85}
            height={85}
            className=""
          />
          <span className="self-center lg:text-2xl whitespace-nowrap dark:text-black font-bold font-Montserrat pl sm:text-xl ">
            Ironworks Construction
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-black hover:bg-white"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-black text-xl">
            <li>
              <span
                className="block py-2 px-3 md:p-0 hover:underline underline-offset-4"
                aria-current="page"
              >
                Home
              </span>
            </li>
            <li>
              <span
                className="block py-2 px-3 md:p-0 hover:underline hover:m-1s underline-offset-4"
                onClick={() => goToPage(1)}
              >
                Services
              </span>
            </li>
            <li>
              <span
                className="block py-2 px-3 md:p-0 hover:underline hover:ease-in duration-1 underline-offset-4 "
                onClick={() => goToPage(2)}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
