"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-[60px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto  ">

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-4 md:gap-6 lg:gap-0 w-full flex items-center">

          {/* Building Image (Fixed: order-2 on mobile to move it below text, added rounded corners) */}
          {/* Outer wrapper to handle the ordering and padding safely */}
<div className="order-2 lg:order-1 w-full lg:w-[834px] mt-2 lg:mt-0 px-4 sm:px-6 md:px-8 lg:px-0">
  
  {/* Inner container to handle the sizing and rounded corners */}
  <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[378px] overflow-hidden rounded-xl lg:rounded-none">
    <Image
      src="/assets/about-building.svg"
      alt="About Building"
      fill
      className="object-cover"
    />
  </div>

</div>

          {/* About Us Title (Fixed: order-1 on mobile, centered text, fixed the sm:h-[20px] typo) */}
          <div className="order-1 lg:order-2 border-t border-b border-[#E5E5E5] flex items-center justify-center lg:justify-start h-[120px] sm:h-[120px] md:h-[160px] lg:h-[250px] w-full lg:w-[834px] ">
            <h2
              className="text-[28px] sm:text-[32px] md:text-[48px] lg:text-[60px] font-medium tracking-[-0.02em] text-black px-0 lg:px-26"
              style={{
                fontFamily:
                  "var(--font-plus-jakarta-sans), sans-serif",
              }}
            >
              ABOUT US
            </h2>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-[80px] lg:ml-[60px] w-full grid grid-cols-1 lg:grid-cols-[24%_28%_48%] gap-8 md:gap-8 lg:gap-[20px] items-center px-4 sm:px-6 md:px-8 lg:px-0">

          {/* Left Column: Mission / Vision */}
          <div className="flex flex-col gap-[40px] sm:gap-[50px] lg:gap-[60px]">
            
            {/* Mission */}
            <div className="flex flex-col gap-3 lg:gap-4 ">
              {/* Icon & Title Row */}
              <div className="flex items-center gap-3 md:gap-4 lg:gap-[16px]">
                <div className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] bg-black flex items-center justify-center flex-shrink-0  ">
                  <Image
                    src="/assets/star-icon.svg"
                    alt="Mission"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-black m-0 leading-none "
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600
                  }}
                >
                  OUR MISSION
                </h3>
              </div>
              
              {/* Description below Icon & Title */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] leading-[180%] text-[#6B6B6B] m-0"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400
                }}
              >
                We deliver compliant, insight-driven audits that
                create clarity, measurable improvement, and lasting
                confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {/* Icon & Title Row */}
              <div className="flex items-center gap-3 md:gap-4 lg:gap-[16px]">
                <div className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[48px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] bg-black flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/star-icon.svg"
                    alt="Vision"
                    width={18}
                    height={18}
                  />
                </div>
                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-black m-0 leading-none"
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600
                  }}
                >
                  OUR VISION
                </h3>
              </div>
              
              {/* Description below Icon & Title */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] leading-[180%] text-[#6B6B6B] m-0"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 400
                }}
              >
                To become one of the UAE’s most trusted auditing
                partners, known for reliability, responsiveness, and
                real business impact.
              </p>
            </div>

          </div>

          {/* Center Column: Image */}
          <div className="hidden md:flex md:justify-center">
            <div className="relative md:w-[280px] lg:w-[323px] md:h-[350px] lg:h-[417px] overflow-hidden rounded-md">
              <Image
                src="/assets/about-paperwork.svg"
                alt="Accounting Documents"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <p
              className="w-full lg:w-[567px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[180%] text-[#6B6B6B]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400
              }}
            >
              We are a UAE-registered audit and assurance firm
              delivering clear, efficient, and compliant audit
              solutions. Our insight-driven approach strengthens
              governance, improves financial accuracy, and builds
              stakeholder trust across Mainland, Free Zones, DIFC,
              and ADGM.
            </p>

            <button
              className="mt-6 sm:mt-5 md:mt-6 lg:mt-8 w-[130px] sm:w-[140px] md:w-[150px] lg:w-[153px] h-[36px] md:h-[38px] lg:h-[38.25px] flex items-center justify-center rounded-full bg-black text-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13.5px] font-medium transition-all duration-300 hover:scale-[1.03]"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 400
              }}
            >
              EXPLORE NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}