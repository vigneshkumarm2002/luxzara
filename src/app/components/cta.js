import Link from "next/link";

export default function CTA() {
    return (
      <div className="bg-[#217272] back">
        <div className="px-6 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 style={{lineHeight:"1.3"}} className="text-3xl font-bold  tracking-tight text-white sm:text-4xl font_poppins">
            Ready for a Style Transformation? 
              <br />
              Book Your Beauty Now!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
             
Step into Luxzara Unisex Salon for the perfect haircut and stunning bridal makeovers. Our experts bring out your best with top-notch services. Rediscover your beauty at Luxzara!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="tel:09941414149" target="blank"
                      className="min-w-[120px] text-center rounded-md bg-white px-3.5 py-2.5 text-lg font-medium text-[#217272] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#217272]"
                    >
                      Call Now
                    </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  