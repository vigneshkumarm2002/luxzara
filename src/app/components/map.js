// Import React
import React from "react";

import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const solutions = [
  {
    name: "Address",
    description: (
      <p className="sm:text-center">
        Janakpuri 1st street,100ft road 1,
        <br />
        Velachery Bypass Road <br />
        near by French Loaf Velachery Chennai,
        <br />
        Tamil Nadu 600042 India
      </p>
    ),
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Contact",
    description: (
      <p className="sm:text-center flex flex-col gap-2">
        <Link href="tel:09941414149">099414 14149</Link> 
        <Link href="tel:04448511668">044 4851 1668</Link> 
        <Link href="mailto:luxzara.india@gmail.com">
          luxzara.india@gmail.com
        </Link>
      </p>
    ),
    icon: PhoneIcon,
  },
  {
    name: "Business Hours",
    description: (
      <p className="sm:text-center">
        Everyday
        <br />
        10:00 AM - 09:00 PM
      </p>
    ),
    icon: ClockIcon,
  },
];

// Create Map component
const Map = () => {
  return (
    <div
      id="contact"
      className=" relative w-full mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-20 "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7219505453927!2d80.21652737487074!3d12.989627614483208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267629b1671a7%3A0x8942d53bbc4e51f4!2sLuxzara!5e0!3m2!1sen!2sin!4v1706808698160!5m2!1sen!2sin"
        width="100%"
        height="400"
        className="relative rounded-md shadow-lg"
        allowFullScreen=""
       
        referrerPolicy="no-referrer-when-downgrade"
      >
        
      </iframe>

      <div className=" grid grid-cols-1 gap-y-6 pt-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 sm:pt-10 md:grid-cols-3 lg:gap-4  xl:gap-8">
        {solutions.map((item) => (
          <div
            key={item.name}
            className="  flex gap-6  text-sm   sm:flex-col   sm:items-center "
          >
            <div className="flex gap-2 sm:items-center">
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-md  bg-[#30a4a4]">
                <item.icon
                  className="h-5 w-auto text-white "
                  aria-hidden="true"
                />
              </div>
              <p className="hidden sm:block font-semibold text-center text-gray-900 text-lg">
                {item.name}
               
              </p>
            </div>
            <div>
              <p className="sm:hidden font-semibold text-gray-900 text-base">
                {item.name}
              
              </p>
              <p className="mt-2 sm:-mt-3 text-gray-600 text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export Map component
export default Map;
