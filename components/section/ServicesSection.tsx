import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-8 sm:py-12 md:py-16 lg:py-24 font-sans overflow-hidden">
      {/* 1440px Desktop Grid Container */}
      <div className="w-full  flex flex-col gap-6 sm:gap-10 md:gap-16 lg:gap-20 overflow-hidden">
        
        {/* --- TOP ROW: Title & Handshake Image --- */}
        <div className="ml-0 sm:ml-0 md:ml-8 lg:ml-[100px] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[200px] w-full px-4 sm:px-4 md:px-0">
          
          {/* Text Block */}
          <div className="flex flex-col">
            <span 
              className="text-[#4A4A4A] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mb-2 md:mb-3 lg:mb-4 font-regular"
              style={{ fontFamily: 'var(--font-clash-grotesk-reg), sans-serif', fontWeight: 400 }}
            >
              Our Services
            </span>
            <h2 
              className="text-[#0B2530] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[100%] w-full md:w-[300px] lg:w-[393px]"
              style={{ fontFamily: 'var(--font-lato), sans-serif', fontWeight: 600 }}
            >
              EXCELLENT CONSULTING AGENCY FOR LEGAL ISSUES
            </h2>
          </div>

          {/* Handshake Image Block */}
          <div className="hidden md:block relative w-full md:w-[250px] lg:w-[829px] h-[150px] md:h-[250px] lg:h-[373px]">
            <Image
              src="/assets/Frame 1171274929.svg" 
              alt="Handshake representing excellent consulting"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>

        {/* --- BOTTOM ROW: Service Cards Grid --- */}
        <div className="mt-4 md:mt-6 lg:mt-[30px] w-full flex justify-center px-4 sm:px-4 md:px-0">
  <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 lg:gap-[28px] w-full">

    {/* Card 1: Auditing */}
    <div className="w-full sm:w-[95%] md:w-[calc(25%-8px)] lg:w-[248px] h-auto md:h-[180px] lg:h-[227px] bg-white border border-[#EBEBEB] flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0">
      <h3
        className="text-[#0B2530] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        Auditing Services
      </h3>

      <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] mb-2 md:mb-3 lg:mb-5"></div>

      <div
        className="flex justify-between items-center text-[#757575] text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px]"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        <span>More Information</span>

        <Image
          src="/assets/arrow-right.svg"
          alt="Arrow pointing right"
          width={16}
          height={16}
          className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px]"
        />
      </div>
    </div>

    {/* Card 2: Accounting (Featured) */}
    <div className="relative w-full sm:w-[95%] md:w-[calc(25%-8px)] lg:w-[317px] h-auto md:h-[260px] lg:h-[353px] flex flex-col justify-end p-4 md:p-5 lg:p-8 shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.5)] z-10 md:translate-y-0 lg:translate-y-[-18px] mx-auto sm:mx-auto md:mx-0">
      <Image
        src="/assets/image 7.svg"
        alt="Accounting paperwork"
        fill
        className="object-cover absolute inset-0 z-0"
      />

      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 text-white flex flex-col">
        <span
          className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] mb-1 md:mb-2 opacity-90 leading-tight"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
          }}
        >
          Modern
          <br />
          City
        </span>

        <h3
          className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
          }}
        >
          ACCOUNTING
          <br />
          SERVICES
        </h3>

        <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-white opacity-80 mb-2 md:mb-3 lg:mb-5"></div>

        <div
          className="flex justify-between items-center text-white text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px]"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
          }}
        >
          <span className="opacity-90">More Information</span>

          <Image
            src="/assets/arrow-right.svg"
            alt="Arrow pointing right"
            width={16}
            height={16}
            className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px]"
          />
        </div>
      </div>
    </div>

    {/* Card 3: VAT Services */}
    <div className="w-full sm:w-[95%] md:w-[calc(25%-8px)] lg:w-[248px] h-auto md:h-[180px] lg:h-[227px] bg-white border border-[#EBEBEB] flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0">
      <h3
        className="text-[#0B2530] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        VAT
        <br />
        SERVICES
      </h3>

      <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] mb-2 md:mb-3 lg:mb-5"></div>

      <div
        className="flex justify-between items-center text-[#757575] text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px]"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        <span>More information</span>

        <Image
          src="/assets/arrow-right.svg"
          alt="Arrow pointing right"
          width={16}
          height={16}
          className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px]"
        />
      </div>
    </div>

    {/* Card 4: Corporate Tax */}
    <div className="w-full sm:w-[95%] md:w-[calc(25%-8px)] lg:w-[248px] h-auto md:h-[180px] lg:h-[227px] bg-white border border-[#EBEBEB] flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0">
      <h3
        className="text-[#0B2530] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        Corporate
        <br />
        Tax
      </h3>

      <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] mb-2 md:mb-3 lg:mb-5"></div>

      <div
        className="flex justify-between items-center text-[#757575] text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px]"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        <span>More information</span>

        <Image
          src="/assets/arrow-right.svg"
          alt="Arrow pointing right"
          width={16}
          height={16}
          className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px]"
        />
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default ServicesSection;