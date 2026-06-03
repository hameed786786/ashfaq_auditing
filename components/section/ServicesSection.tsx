import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-4 sm:py-12 md:py-16 lg:pt-24 font-sans overflow-hidden pt-0">
      {/* 1440px Desktop Grid Container */}
      <div className="w-full max-w-[1440px] flex flex-col gap-6 sm:gap-10 md:gap-16 lg:gap-20 overflow-hidden mx-auto">
        
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
          <div className="relative w-full md:w-[250px] lg:w-[829px] h-[180px] sm:h-[220px] md:h-[250px] lg:h-[373px] mt-2 md:mt-0 rounded-xl md:rounded-none overflow-hidden">
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
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-2 lg:gap-[28px] w-full h-auto md:h-[300px] lg:h-[400px]">

            {/* Card 1: Auditing */}
            {/* Added focus: and group-focus: variants to map taps to hovers */}
            <div 
              className="group relative w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-8px)] lg:w-[248px] hover:lg:w-[317px] focus:lg:w-[317px] h-[120px] hover:h-[200px] focus:h-[200px] sm:h-[160px] hover:sm:h-[240px] focus:sm:h-[240px] md:h-[180px] hover:md:h-[260px] focus:md:h-[260px] lg:h-[227px] hover:lg:h-[353px] focus:lg:h-[353px] bg-white border border-[#EBEBEB] hover:border-transparent focus:border-transparent flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:z-10 focus:z-10 overflow-hidden cursor-pointer focus:outline-none [-webkit-tap-highlight-color:transparent]"
              tabIndex={0}
            >
              
              {/* Hover Background Image */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                <Image
                  src="/assets/image 7.svg"
                  alt="Auditing paperwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end text-[#0B2530] group-hover:text-white group-focus:text-white transition-colors duration-300">
                
                {/* Modern City Text (Only visible on hover/focus) */}
                <span
                  className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] mb-1 md:mb-2 opacity-0 group-hover:opacity-90 group-focus:opacity-90 leading-tight transition-opacity duration-300 max-h-0 group-hover:max-h-[50px] group-focus:max-h-[50px] overflow-hidden"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Modern<br />City
                </span>

                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Auditing
                  <br className="hidden group-hover:block group-focus:block" /> 
                  <span className="group-hover:hidden group-focus:hidden"> </span>
                  Services
                </h3>

                <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] group-hover:bg-white group-focus:bg-white group-hover:opacity-80 group-focus:opacity-80 mb-2 md:mb-3 lg:mb-5 transition-colors duration-300"></div>

                <div
                  className="flex justify-between items-center text-[#757575] group-hover:text-white group-focus:text-white text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  <span className="group-hover:opacity-90 group-focus:opacity-90">More Information</span>
                  <Image
                    src="/assets/arrow-right.svg"
                    alt="Arrow pointing right"
                    width={16}
                    height={16}
                    className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px] group-hover:brightness-0 group-focus:brightness-0 group-hover:invert group-focus:invert transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Accounting */}
            <div 
              className="group relative w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-8px)] lg:w-[248px] hover:lg:w-[317px] focus:lg:w-[317px] h-[120px] hover:h-[200px] focus:h-[200px] sm:h-[160px] hover:sm:h-[240px] focus:sm:h-[240px] md:h-[180px] hover:md:h-[260px] focus:md:h-[260px] lg:h-[227px] hover:lg:h-[353px] focus:lg:h-[353px] bg-white border border-[#EBEBEB] hover:border-transparent focus:border-transparent flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:z-10 focus:z-10 overflow-hidden cursor-pointer focus:outline-none [-webkit-tap-highlight-color:transparent]"
              tabIndex={0}
            >
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                <Image
                  src="/assets/image 7.svg"
                  alt="Accounting paperwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end text-[#0B2530] group-hover:text-white group-focus:text-white transition-colors duration-300">
                
                <span
                  className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] mb-1 md:mb-2 opacity-0 group-hover:opacity-90 group-focus:opacity-90 leading-tight transition-opacity duration-300 max-h-0 group-hover:max-h-[50px] group-focus:max-h-[50px] overflow-hidden"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Modern<br />City
                </span>

                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.2] mb-2 md:mb-3 lg:mb-5 uppercase"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  ACCOUNTING
                  <br className="hidden group-hover:block group-focus:block" />
                  <span className="group-hover:hidden group-focus:hidden"> </span>
                  SERVICES
                </h3>

                <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] group-hover:bg-white group-focus:bg-white group-hover:opacity-80 group-focus:opacity-80 mb-2 md:mb-3 lg:mb-5 transition-colors duration-300"></div>

                <div
                  className="flex justify-between items-center text-[#757575] group-hover:text-white group-focus:text-white text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  <span className="group-hover:opacity-90 group-focus:opacity-90">More Information</span>
                  <Image
                    src="/assets/arrow-right.svg"
                    alt="Arrow pointing right"
                    width={16}
                    height={16}
                    className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px] group-hover:brightness-0 group-focus:brightness-0 group-hover:invert group-focus:invert transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: VAT Services */}
            <div 
              className="group relative w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-8px)] lg:w-[248px] hover:lg:w-[317px] focus:lg:w-[317px] h-[120px] hover:h-[200px] focus:h-[200px] sm:h-[160px] hover:sm:h-[240px] focus:sm:h-[240px] md:h-[180px] hover:md:h-[260px] focus:md:h-[260px] lg:h-[227px] hover:lg:h-[353px] focus:lg:h-[353px] bg-white border border-[#EBEBEB] hover:border-transparent focus:border-transparent flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:z-10 focus:z-10 overflow-hidden cursor-pointer focus:outline-none [-webkit-tap-highlight-color:transparent]"
              tabIndex={0}
            >
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                <Image
                  src="/assets/image 7.svg"
                  alt="VAT Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end text-[#0B2530] group-hover:text-white group-focus:text-white transition-colors duration-300">
                
                <span
                  className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] mb-1 md:mb-2 opacity-0 group-hover:opacity-90 group-focus:opacity-90 leading-tight transition-opacity duration-300 max-h-0 group-hover:max-h-[50px] group-focus:max-h-[50px] overflow-hidden"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Modern<br />City
                </span>

                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold leading-[1.2] mb-2 md:mb-3 lg:mb-5 uppercase"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  VAT
                  <br className="hidden group-hover:block group-focus:block" />
                  <span className="group-hover:hidden group-focus:hidden"> </span>
                  SERVICES
                </h3>

                <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] group-hover:bg-white group-focus:bg-white group-hover:opacity-80 group-focus:opacity-80 mb-2 md:mb-3 lg:mb-5 transition-colors duration-300"></div>

                <div
                  className="flex justify-between items-center text-[#757575] group-hover:text-white group-focus:text-white text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  <span className="group-hover:opacity-90 group-focus:opacity-90">More information</span>
                  <Image
                    src="/assets/arrow-right.svg"
                    alt="Arrow pointing right"
                    width={16}
                    height={16}
                    className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px] group-hover:brightness-0 group-focus:brightness-0 group-hover:invert group-focus:invert transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Card 4: Corporate Tax */}
            <div 
              className="group relative w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-8px)] lg:w-[248px] hover:lg:w-[317px] focus:lg:w-[317px] h-[120px] hover:h-[200px] focus:h-[200px] sm:h-[160px] hover:sm:h-[240px] focus:sm:h-[240px] md:h-[180px] hover:md:h-[260px] focus:md:h-[260px] lg:h-[227px] hover:lg:h-[353px] focus:lg:h-[353px] bg-white border border-[#EBEBEB] hover:border-transparent focus:border-transparent flex flex-col justify-end p-4 md:p-5 lg:p-8 mx-auto sm:mx-auto md:mx-0 transition-all duration-300 ease-in-out hover:z-10 focus:z-10 overflow-hidden cursor-pointer focus:outline-none [-webkit-tap-highlight-color:transparent]"
              tabIndex={0}
            >
              
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                <Image
                  src="/assets/image 7.svg"
                  alt="Corporate Tax"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end text-[#0B2530] group-hover:text-white group-focus:text-white transition-colors duration-300">
                
                <span
                  className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] mb-1 md:mb-2 opacity-0 group-hover:opacity-90 group-focus:opacity-90 leading-tight transition-opacity duration-300 max-h-0 group-hover:max-h-[50px] group-focus:max-h-[50px] overflow-hidden"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Modern<br />City
                </span>

                <h3
                  className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-extrabold leading-[1.2] mb-2 md:mb-3 lg:mb-5"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  Corporate
                  <br className="hidden group-hover:block group-focus:block" />
                  <span className="group-hover:hidden group-focus:hidden"> </span>
                  Tax
                </h3>

                <div className="w-full h-[1.5px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] group-hover:bg-white group-focus:bg-white group-hover:opacity-80 group-focus:opacity-80 mb-2 md:mb-3 lg:mb-5 transition-colors duration-300"></div>

                <div
                  className="flex justify-between items-center text-[#757575] group-hover:text-white group-focus:text-white text-[8px] sm:text-[10px] md:text-[10px] lg:text-[11px] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
                >
                  <span className="group-hover:opacity-90 group-focus:opacity-90">More information</span>
                  <Image
                    src="/assets/arrow-right.svg"
                    alt="Arrow pointing right"
                    width={16}
                    height={16}
                    className="w-[6px] sm:w-[8px] md:w-[8px] lg:w-[10px] h-[5px] sm:h-[6px] md:h-[6px] lg:h-[8px] group-hover:brightness-0 group-focus:brightness-0 group-hover:invert group-focus:invert transition-all duration-300"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;