"use client";

import Image from "next/image";

const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Book Consultation",
    description:
      "Schedule a free 30-minute call to discuss your audit requirements and get a custom quote.",
    image: "/assets/process-1.jpg",
    icon: "/assets/calendar.svg",
    points: [
      "Fixed-fee quote",
      "Free initial consultation",
      "Custom scope assessment",
    ],
  },
  {
    id: 2,
    step: "02",
    title: "Upload Documents",
    description:
      "Securely upload your financial documents through our encrypted portal. We'll handle the rest.",
    image: "/assets/process-2.jpg",
    icon: "/assets/paperclip.svg",
    points: [
      "256-bit encryption",
      "Progress tracking",
      "Document checklist provided",
    ],
  },
  {
    id: 3,
    step: "03",
    title: "Receive Audit Report",
    description:
      "Get your comprehensive audit report with findings, recommendations, and compliance certificates.",
    image: "/assets/process-3.jpg",
    icon: "/assets/folder.svg",
    points: [
      "Detailed findings",
      "Compliance certificate",
      "Regulatory filing support",
    ],
  },
];

export default function SimpleProcessSection() {
  return (
    <section className="pl-[50px] w-full bg-[#F5F5F5] py-12 sm:py-16 md:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-4 md:px-6 lg:px-0">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-[100px]">
          <p
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#111111] mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-regular"
            style={{
              fontFamily: "var(--font-clash-grotesk-reg), sans-serif",
            }}
          >
            Simple Process
          </p>

          <h2
            className="h-auto text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] w-full lg:w-[672px] leading-[110%] font-semibold text-black tracking-[0%]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              fontWeight: 600,
            }}
          >
            Get Your Audit Done in 3 Simple Steps
          </h2>
        </div>

        {/* STEP 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-[48%_42%] gap-6 sm:gap-8 md:gap-10 lg:gap-[60px] items-center">
          {/* Left Image Card */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[380px] lg:h-[458px] overflow-hidden rounded-[4px] w-full lg:w-[737px] shadow-[0px_1px_7px_0px_#00000029,0px_1px_9px_0px_#0000002E]">
            <Image
              src={processSteps[0].image}
              alt={processSteps[0].title}
              fill
              className="object-cover"
            />

            <div className="h-auto sm:h-auto md:h-[140px] lg:h-[158px] w-full px-1 sm:px-2 md:px-0 md:w-[95%] lg:w-[720px] absolute left-0 sm:left-1 md:left-1 lg:left-1 bottom-1 sm:bottom-2 rounded-[12px] border border-white/40 bg-white/10 backdrop-blur-[12px] p-3 sm:p-4 md:p-5 lg:p-7 flex flex-col justify-center">
              <h3
                className="text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-tight mb-1 sm:mb-2"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                {processSteps[0].title}
              </h3>

              <p
                className="text-white/90 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[150%]"
                style={{
                  fontFamily: "var(--font-clash-grotesk-reg), sans-serif",
                }}
              >
                {processSteps[0].description}
              </p>

              <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-2 mt-2 sm:mt-3">
                {processSteps[0].points.map((point) => (
                  <span
                    key={point}
                    className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] text-white font-light tracking-wide flex items-center gap-2"
                  >
                    <span className="text-[10px]">•</span> {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Step */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src={processSteps[0].icon}
              alt="Calendar"
              width={312}
              height={312}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[312px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[312px] object-contain"
            />

            <div className="w-full sm:w-[90%] md:w-[95%] lg:w-[532px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[138px] border border-[#D9D9D9] flex items-center justify-center bg-white gap-2 mt-[-10px] sm:mt-[-15px] md:mt-[-18px] lg:mt-[-20px]">
              <h3
                className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                STEP 
              </h3>
              <span 
                className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                01
              </span>
            </div>
          </div>
        </div>

        {/* STEP 02 */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-[80px] grid grid-cols-1 lg:grid-cols-[42%_58%] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] items-center">
          {/* Left Step */}
          <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
            <Image
              src={processSteps[1].icon}
              alt="Paperclip"
              width={312}
              height={312}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[312px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[312px] object-contain"
            />

            <div className="w-full sm:w-[90%] md:w-[95%] lg:w-[532px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[138px] border border-[#D9D9D9] flex items-center justify-center bg-white gap-2 mt-[-10px] sm:mt-[-15px] md:mt-[-18px] lg:mt-[-20px]">
              <h3
                className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                STEP 
              </h3>
              <span 
                className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                02
              </span>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="order-1 lg:order-2 relative h-[250px] sm:h-[300px] md:h-[380px] lg:h-[458px] overflow-hidden rounded-[4px] w-full shadow-[0px_1px_7px_0px_#00000029,0px_1px_9px_0px_#0000002E]">
            <Image
              src={processSteps[1].image}
              alt={processSteps[1].title}
              fill
              className="object-cover"
            />

            <div className="h-auto sm:h-auto md:h-[140px] lg:h-[158px] w-full px-1 sm:px-2 md:px-0 md:w-[95%] lg:w-[720px] absolute right-0 sm:right-1 md:right-1 lg:right-1 bottom-1 sm:bottom-2 rounded-[12px] border border-white/40 bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-7 flex flex-col justify-center">
              <h3
                className="text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-tight mb-1 sm:mb-2"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                {processSteps[1].title}
              </h3>

              <p
                className="text-white/90 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[150%]"
                style={{
                  fontFamily: "var(--font-clash-grotesk-reg), sans-serif",
                }}
              >
                {processSteps[1].description}
              </p>

              <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-2 mt-2 sm:mt-3">
                {processSteps[1].points.map((point) => (
                  <span
                    key={point}
                    className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] text-white/90 font-light tracking-wide flex items-center gap-2"
                  >
                    <span className="text-[10px]">♦</span> {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03 */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-[80px] grid grid-cols-1 lg:grid-cols-[48%_42%] gap-6 sm:gap-8 md:gap-10 lg:gap-[60px] items-center">
          {/* Left Image Card */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[380px] lg:h-[458px] overflow-hidden rounded-[4px] w-full lg:w-[737px] shadow-[0px_1px_7px_0px_#00000029,0px_1px_9px_0px_#0000002E]">
            <Image
              src={processSteps[2].image}
              alt={processSteps[2].title}
              fill
              className="object-cover"
            />

            <div className="h-auto sm:h-auto md:h-[140px] lg:h-[158px] w-full px-1 sm:px-2 md:px-0 md:w-[95%] lg:w-[720px] absolute left-0 sm:left-1 md:left-1 lg:left-1 bottom-1 sm:bottom-2 rounded-[12px] border border-white/40 bg-white/10 backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-7 flex flex-col justify-center">
              <h3
                className="text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-tight mb-1 sm:mb-2"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                {processSteps[2].title}
              </h3>

              <p
                className="text-white text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[120%]"
                style={{
                  fontFamily: "var(--font-clash-grotesk-reg), sans-serif",
                  fontWeight: 400
                }}
              >
                {processSteps[2].description}
              </p>

              <div className="flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-2 mt-2 sm:mt-3">
                {processSteps[2].points.map((point) => (
                  <span
                    key={point}
                    className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] text-white/90 font-light tracking-wide flex items-center gap-2"
                  >
                    <span className="text-[10px]">♦</span> {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Step */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src={processSteps[2].icon}
              alt="Folder"
              width={312}
              height={312}
              className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[312px] h-[200px] sm:h-[240px] md:h-[280px] lg:h-[312px] object-contain"
            />

            <div className="w-full sm:w-[90%] md:w-[95%] lg:w-[532px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[138px] border border-[#D9D9D9] flex items-center justify-center bg-white gap-2 mt-[-10px] sm:mt-[-15px] md:mt-[-18px] lg:mt-[-20px]">
              <h3
                className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                STEP 
              </h3>
              <span 
                className="font-bold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-black"
                style={{
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                03
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}