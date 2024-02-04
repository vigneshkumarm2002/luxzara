import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Banner from "./../../../public/assets/banner.png";
import Image from "next/image";

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" grid grid-cols-1 gap-14 lg:gap-10 lg:grid-cols-2  lg:items-start ">
          <div  className="relative order-2 lg:-order-none h-full isolate overflow-hidden bg-[#217272]  rounded-lg sm:rounded-3xl p-4 sm:p-10 lg:mx-0 lg:max-w-none sm:mx-auto sm:max-w-2xl  ">
            <div
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
              aria-hidden="true"
            />
            <Image
              src={Banner.src}
              alt="Banner Image"
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg sm:rounded-xl bg-gray-800 ring-1 ring-white/10"
            />

            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              aria-hidden="true"
            />
          </div>

       

          <div className="  lg:pt-4 flex justify-end">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#217272] font_poppins">
                About Us
              </h2>
              <p className="mt-3 text-lg text-justify  text-gray-600">
                Luxzara strives to be your ultimate beauty care destination that
                provides a holistic approach towards salon services rendered to
                both men and women of all ages. Our aim is to realize the full
                potential of our expert beauty care counselors trained to
                personalize and tailor services to suit your distinctive needs.
                We aim at reaching and staying close to your heart by always
                using the best of organic premium products; constantly updating
                our state of the art equipment and maintaining our plush
                ambience demonstrating luxury in its true sense. Luxzara’s main
                objective is therefore to pamper you with professionally
                customized services that celebrate the beauty within you and
                make every visit a delightful memory to cherish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
