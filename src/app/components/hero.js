import hair1 from "../../../public/assets/makeup.jpg";
import MenHairCut from "./../../../public/assets/mens-hair-cut.png"
import Nail from "./../../../public/assets/keratin.jpg"
import Link from "next/link";

export default function Hero() {
  return (
    <div id="home" className="bg-white">
      <main>
        <div  className="relative isolate">
          {/* 
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div> */}
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl pb-14 sm:pb-20 pt-20  lg:pt-16">
              <div className="mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="pr-6 lg:pr-0 lg:pl-8 pl-6 mx-auto max-w-2xl relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl text-center lg:text-left flex flex-col items-center  lg:items-start">
                  <h1
                    style={{ lineHeight: 1.2 }}
                    className="text-4xl font-bold text-gray-900 sm:text-[54px] font_poppins"
                  >
                    <span className="text-[#217272] ">Glow Up </span>Your Glam,{" "}
                    <br /> A Unisex Beauty{" "}
                    <span className="text-[#217272]">Wonderland </span>Awaits!
                  </h1>

                  <p className="mt-6 text-xl leading-8 text-gray-600 ">
                    Step into Luxzara Unisex Salon – where beauty feels like a
                    breeze! Our friendly crew is all about keeping it simple and
                    super stylish. Drop in, relax, and let's add a dash of
                    fabulous to your day.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6 w-[fit-content] ">
                  <Link href="https://wa.me/+919941414149" target="blank"
                      className="min-w-[150px] text-center rounded-md bg-[#217272] px-3.5 py-3 text-lg font-medium text-white shadow-sm hover:bg-[#217272] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#217272]"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
                <div className="w-[100%] px-6 md:px-16 lg:px-0 mt-14 lg:mt-[0px] flex flex-col gap-2 sm:gap-4  justify-center items-center lg:items-start">
                  <div className="relative">
                    <img
                      src={hair1.src}
                      alt="Product screenshot"
                      className="h-[350px] object-cover lg:max-w-none rounded-md sm:rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[50rem] "
                      width={2432}
                      height={1442}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-md sm:rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="flex gap-2 sm:gap-4">
                    <div className="relative">
                      <img
                        src={MenHairCut.src}
                        alt="Product screenshot"
                        className="h-[200px] object-cover lg:max-w-none  rounded-md sm:rounded-lg shadow-xl ring-1 ring-gray-400/10 lg:w-[25rem] "
                        width={2432}
                        height={1442}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-md sm:rounded-lg ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={Nail.src}
                        alt="Product screenshot"
                        className="h-[200px] object-cover lg:max-w-none rounded-md sm:rounded-lg shadow-xl ring-1 ring-gray-400/10 lg:w-[25rem] "
                        width={2432}
                        height={1442}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-md sm:rounded-lg ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
