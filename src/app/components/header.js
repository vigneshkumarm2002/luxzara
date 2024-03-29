"use client";
import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";
import logo from "./../../../public/assets/luxzara-logo.png";
import Instagram from "./../../../public/assets/instagram.png";
import Whatsapp from "./../../../public/assets/whatsapp.png";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="inset-x-0 top-0 z-50 sticky bg-[#ffff] font_poppins">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <ScrollLink to="home" smooth={true} duration={500}>
            <span className="sr-only">Luxzara</span>
            <Image priority className="h-9 w-auto" width={200} height={80} src={logo.src} alt="Logo" />
          </ScrollLink>
        </div>
        <div className="flex gap-4 lg:hidden items-center">
          <Link href="https://www.instagram.com/luxzara/?hl=en" target="blank">
       
            <Image priority className="w-5 h-5" width={20} height={20} src={Instagram.src} alt="Instagram" />
          </Link>
          <Link href="https://wa.me/+919941414149" target="blank">
         
            <Image priority className="w-5 h-5" width={20} height={20}  src={Whatsapp.src} alt="Whatsapp" />
          </Link>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href.substring(1)} // Remove the '#' from the href
              smooth={true}
              duration={500}
              offset={-30}
              className="text-sm font-medium leading-6 text-gray-900 cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
          <Link href="https://www.instagram.com/luxzara/?hl=en" target="blank">
            
            <Image priority className="w-6 h-6" width={24} height={24} src={Instagram.src} alt="Instagram" />
          </Link>
          <Link href="https://wa.me/+919941414149" target="blank">
            
            <Image priority className="w-6 h-6" width={24} height={24} src={Whatsapp.src} alt="Whatsapp" />
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
      >
        <div className="fixed inset-0 z-50 bg-black/70" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50  w-[80vw] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
              <ScrollLink to="home" smooth={true} duration={500}>
                <span className="sr-only">Luxzara</span>
                <Image priority className="h-7 w-auto" height={60} width={200} src={logo.src} alt="Logo" />
              </ScrollLink>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href.substring(1)} // Remove the '#' from the href
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={closeMobileMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
