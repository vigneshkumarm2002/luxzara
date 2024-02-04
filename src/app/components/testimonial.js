"use client";
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  [
    {
      content:
        "I had an amazing experience here. My hair cut and colour was done by Ms.Susila and the stylist knew what exactly I wanted. The best thing was how she styled my hair, showed me exactly how my hair will look even after wash.Thanks for making me happy and satisfied for these wonderful hair look😍",
      author: {
        name: "Sumathy l",
      },
      rating: "5",
    },
    {
      content:
        "Generally I won’t write reviews, but I’m writing because of I got an excellent work given by Mr Arpan Tirwa at Luxzara saloon, Velachery. I recommend him for professionals, photo shoot, studio styles, functions and celebrity hair cut & spa strongly.. His patience and final outcome was fabulous.. Definitely I shall come again Mr Arpan & team Luxzara :)",
      author: {
        name: "Praveen c",
      },
      rating: "5",
    },
  ],
  [
    {
      content:
        "I had great experience with Luxzara. The Stylist Suseela was a bunch of joy and had the patience to listen and answer all of my questions. Not only for the service I had (Hair Cut, highlights, threading etc.,) but also I recommend for Kids styling as I have been taking my son here for his hair cut from age of 3 and this will be the place where I will take my daughter too, when she grows up. Thanks Luxzara for the care and service.",
      author: {
        name: "Subalaxmi J",
      },
      rating: "5",
    },
    {
      content:
        "I really like Luxzara. They make me look good, and everyone is nice. I tell my friends, including guys, to go there. They do cool haircuts for men too.",
      author: {
        name: "Mythreyan",
      },
      rating: "5",
    },
  ],
  [
    {
      content:
        "I really love this salon. They make my hair look nice, and everyone is friendly. I tell my friends to go there too! They always remember what I like. It feels like they made the salon just for me. The place is comfy, and it's so relaxed. Going there is like hanging out with friends and getting my hair done.",
      author: {
        name: "Vicky",
      },
      rating: "5",
    },
    {
      content:
        "Great service by Khushi- as always,  she never fails to delight! Her charming conversation makes one feel at ease and enjoy a relaxing time! Must visit for amazing beauty service! Arpan did a wonderful job with the hair dye...a man of few words and good hair skills! God bless both!",
      author: {
        name: "Supriya",
      },
      rating: "5",
    },
  ],
  [
    {
      content:
      "Luxzara Salon's keratin treatment made my hair super smooth and shiny. The staff is skilled, and the salon vibes are awesome. Totally recommend it for a fantastic hair makeover!",
      author: {
        name: "Abhi M",
      },
      rating: "5",
    },
    {
      content:
      "I loved my bridal makeup at Luxzara Salon! The makeup artist nailed my look, and the attention to detail was perfect. The friendly service added a special touch to my big day. Thanks, Luxzara, for making it memorable!",
       author: {
        name: "Jennifer ",
      },
      rating: "5",
    },
  ],
];

export default function Testimonial() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  let displayedTestimonials;
  if (isLargeScreen) {
    displayedTestimonials = testimonials.slice(0, 3);
  } else if (isMediumScreen) {
    displayedTestimonials = testimonials.slice(0, 4);
  } else {
    displayedTestimonials = testimonials.slice(0, 3);
  }

  return (
    <div id="testimonials" className="relative isolate bg-white pb-20 pt-14 sm:pt-20">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#58bdbd] to-[#58bdbd]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#58bdbd] to-[#58bdbd] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#217272] font_poppins">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font_poppins">
          Hear from our happy and satisfied clients
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid  grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {displayedTestimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                      {/* <QuoteIcon className="absolute left-6 top-6 fill-slate-100" /> */}
                      <blockquote className="relative">
                        <p className="text-base tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="font-display text-base font-medium text-slate-900">
                          {testimonial.author.name}
                        </div>
                        <div className="flex gap-x-1 ">
                          {Array.from({ length: 5 }, (_, index) => (
                            <StarIcon
                              key={index}
                              className={`h-5 w-5 flex-none ${
                                index < testimonial.rating
                                  ? "text-[#ffd64e]"
                                  : "text-gray-300"
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
