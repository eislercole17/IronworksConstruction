import Link from "next/link";
import Image from "next/image";
import emailjs from 'emailjs-com';
import React, { useRef } from "react";

export default function Main() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    console.log(data); // Log the form data for debugging

    emailjs.sendForm('service_yqzj969', 'template_fjg2p6i', form.current, '0oAJF6Z3ajEiqoU9C')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message');
      });
  };

  return (
    <main>
      <div className="w-full min-h-screen">
        <Nav />
        <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
          {/* white background */}
          <div className="bg-white min-h-screen flex flex-col items-center">
            {/* Contact us text */}
            <div className="flex justify-center mt-[120px]">
              <h1 className="text-black text-6xl font-extrabold drop-shadow-md">
                Contact us
              </h1>
            </div>
            {/* form */}
            <div className="w-full max-w-lg mt-12 p-4">
              <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-black block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    id="first-name"
                    autoComplete="given-name"
                    name="first_name"
                    className="w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 "
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-black block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    id="last-name"
                    autoComplete="family-name"
                    name="last_name"
                    className="w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 "
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className="text-black block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="John@gmail.com"
                    autoComplete="email"
                    name="user_email"
                    className="w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 "
                  />
                </div>
                <div className="col-span-2 mt-2.5">
                  <label htmlFor="message" className="text-black block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-2 mt-4">
                  <button type="submit" className="bg-[#FFE633] hover:bg-[#CDB92A] rounded-lg p-4 py-3 shadow-md font-bold items-center justify-center text-black mb-8">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* background */}
          <div className="bg-[image:url('/contact.jpeg')] min-h-screen bg-no-repeat bg-cover max-lg:hidden"></div>
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