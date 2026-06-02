import React from 'react';
import Navbar from '@/components/layout/Navbar'; 
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <div
            className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1080px] bg-white bg-top bg-no-repeat overflow-hidden font-sans select-none flex flex-col items-center"
            style={{
                backgroundImage: `url('/assets/Header.svg')`,
                backgroundSize: '100% auto'
            }}
        >
            {/* 1. Layout Component Injection */}
            <div className="w-full max-w-[1440px] mx-auto">
                <Navbar />
            </div>

            {/* 2. Desktop Hero Content Container */}
            <main className="relative w-full max-w-[1440px] px-4  pt-6 sm:pt-8 md:pt-12 lg:pt-16 flex flex-col items-center">

                {/* Typography Grid System - Locked to 1200px max width */}
                <div className="relative w-full max-w-[1200px] text-[#0B2530] mb-6 sm:mb-6 md:mb-8 lg:mb-12">

                    {/* Row 1: Left Text & Right Accent Statement */}
                    <div className="relative w-full h-auto flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-2 sm:gap-3 md:gap-0">
                        <h1
                            className="text-[24px] sm:text-[32px] md:text-[60px] lg:text-[90px] font-normal tracking-[-2%] leading-[110%] sm:leading-[115%] md:leading-[120%] m-0"
                            style={{ fontFamily: 'var(--font-lato), sans-serif', fontWeight: 400 }}
                        >
                            OVERCOME LEGAL
                        </h1>
                        <span 
                            className="text-[11px] sm:text-[14px] md:text-[22px] lg:text-[32px] font-normal tracking-[-0.16px] text-right md:mt-[33px] mt-0 w-full sm:w-auto"
                            style={{ fontFamily: 'var(--font-lato), sans-serif', fontWeight: 400 }}
                        >
                            COMMIT TO SUCCESS
                        </span>
                    </div>

                    {/* Row 2: Right-staggered Focal Text */}
                    <div className="w-full text-right mt-2 sm:mt-2 md:mt-2 lg:mt-3">
                        <h1 className="inline-block text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] font-normal tracking-[-2%] leading-none m-0">
                            OBSTACLES TO YOUR
                        </h1>
                    </div>

                    {/* Row 3: Left-indented Terminus with Capsule Button */}
                    <div className="w-full mt-2 sm:mt-2 md:mt-3 lg:mt-5 pl-0 md:pl-[60px] lg:pl-[120px] flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0">
                        <h1 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] font-normal tracking-[-2%] leading-none m-0">
                            SUCCESS
                        </h1>

                        {/* Interactive Capsule Pill wrapper */}
                        <div className="group relative bg-[#15161A] rounded-full cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] lg:w-[229px] h-[40px] sm:h-[48px] md:h-[56px] lg:h-[64px] ml-0 md:ml-3 lg:ml-7">
                            <span
                                className="absolute left-[12px] sm:left-[15px] md:left-[20px] lg:left-[28px] top-[10px] sm:top-[12px] md:top-[15px] lg:top-[19px] text-white group-hover:opacity-90 transition-opacity z-10"
                                style={{
                                    fontFamily: 'var(--font-clash-grotesk), sans-serif',
                                    fontWeight: 600,
                                    fontStyle: 'normal',
                                    fontSize: 'clamp(12px, 2vw, 20px)',
                                    lineHeight: 'inherit',
                                    letterSpacing: '0%',
                                }}
                            >
                                Contact us
                            </span>
                            {/* Elongated white inner pill */}
                            <div
                                className="absolute right-[2px] sm:right-[3px] md:right-[4px] lg:right-[5px] top-[2px] sm:top-[3px] md:top-[4px] lg:top-[5px] bg-white transition-all duration-300 z-0"
                                style={{
                                    width: 'clamp(45px, 10vw, 74px)',
                                    height: 'clamp(32px, 8vw, 54px)',
                                    borderRadius: '50px',
                                }}
                            >
                                {/* Arrow SVG perfectly centered */}
                                <img
                                    src="/assets/Vector.svg"
                                    alt="Arrow Right"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 object-contain group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image Block - Locked to a specific width and centered */}
                

            </main>
            <div className="relative w-full mt-[40px] sm:mt-[60px] md:mt-[70px] lg:mt-[70px] flex justify-end px-4 sm:px-4 md:px-0">
                    <Image
                        src="/assets/hero-architecture.png"
                        alt="Modern glass skyscraper architecture"
                        width={1320}
                        height={700}
                        className="w-full sm:w-full md:w-full lg:w-[1200px] h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px] object-cover object-bottom"
                    />
                </div>
        </div>
    );
};

export default HeroSection;