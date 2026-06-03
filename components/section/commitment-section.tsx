import React from 'react';
import Image from 'next/image';

const CommitmentSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-[40px] md:py-[60px] lg:py-[120px] overflow-visible">

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div className="w-[970px] border-y border-[#E5E5E5]">

          <div className="relative max-w-[1400px] mx-auto min-h-[300px] flex items-center">

            <div className="pl-[180px] flex items-start max-w-[760px] z-10">

              <div className="w-[22px] h-[2px] bg-[#0B2530] mt-[22px] mr-[28px] shrink-0" />

              <p
                className="
                  text-[#0B2530]
                  text-[32px]
                  leading-[130%]
                  font-normal
                  w-[600px]
                "
                style={{
                  fontFamily: 'var(--font-lato), sans-serif',
                }}
              >
                We are committed to helping our clients
                achieve their financial goals through expert
                advice, innovative solutions, and unparalleled
                execution.
              </p>
            </div>

            <div className="mt-[40px] absolute right-[-460px] top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/assets/Rectangle 48.svg"
                alt="3D Percentage Symbol"
                width={520}
                height={520}
                priority
                className="w-[520px] h-[520px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE + TABLET */}
      <div className="lg:hidden">
        <div className="w-full border-y border-[#E5E5E5]">

          <div className="px-5 sm:px-8 py-8 sm:py-12 flex">

            <div className="flex items-start ">

              {/* Line */}
              <div className="mt-8 w-[6px] sm:w-[24px] h-[2px] bg-[#0B2530]  sm:mt-4 mr-2 sm:mr-5 shrink-0 flex-col" />

              {/* Text */}
              <p
                className="
                  pt-6
                  text-[#0B2530]
                  text-[11px]
                  sm:text-[24px]
                  leading-[1.7]
                  font-normal
                "
                style={{
                  fontFamily: 'var(--font-lato), sans-serif',
                }}
              >
                We are committed to helping our clients
                achieve their financial goals through expert
                advice, innovative solutions, and unparalleled
                execution.
              </p>
            </div>

            {/* Image */}
            <div className=" mt-1 flex items-start justify-start">
              <Image
                src="/assets/Rectangle 48.svg"
                alt="3D Percentage Symbol"
                width={320}
                height={320}
                className="
                  w-[120px]
                  h-[90px]
                  sm:w-[300px]
                  sm:h-[300px]
                  object-contain
                "
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default CommitmentSection;