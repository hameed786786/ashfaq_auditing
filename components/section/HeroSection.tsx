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
            <main className="relative w-full max-w-[1440px] px-4 pt-6 sm:pt-8 md:pt-12 lg:pt-16 flex flex-col items-center">

                {/* Typography Grid System - Mobile-First Left Stack, Original Desktop layout */}
                <div className="relative w-full max-w-[1200px] text-[#0B2530] mb-6 sm:mb-6 md:mb-8 lg:mb-12 flex flex-col gap-1 md:block">

                    {/* Row 1: Left Text & Right Accent Statement */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                        <h1 
                            className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[90px] font-normal leading-[1.1] md:leading-[120%] tracking-[-0.02em] md:tracking-[-2%] m-0"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                            OVERCOME LEGAL
                        </h1>
                        <span 
                            className="text-[13px] tracking-widest text-[#0B2530]/70 md:text-[22px] lg:text-[32px] md:tracking-[-0.16px] md:text-black md:mt-[33px] text-left md:text-right"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                            COMMIT TO SUCCESS
                        </span>
                    </div>

                    {/* Row 2: Right-staggered Focal Text */}
                    <div className="w-full mt-2 sm:mt-2 md:mt-2 lg:mt-3 md:text-right">
                        <h1 
                            className="inline-block text-[40px] sm:text-[48px] md:text-[60px] lg:text-[90px] font-normal leading-[1.1] md:leading-none tracking-[-0.02em] md:tracking-[-2%] m-0"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                            OBSTACLES TO YOUR
                        </h1>
                    </div>

                    {/* Row 3: Left-indented Terminus with Capsule Button */}
                    <div className="w-full mt-0 sm:mt-2 md:mt-3 lg:mt-5 md:pl-[60px] lg:pl-[120px] flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
                        <h1 
                            className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[90px] font-normal leading-[1.1] md:leading-none tracking-[-0.02em] md:tracking-[-2%] m-0"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                            SUCCESS
                        </h1>

                        {/* Mobile-Optimized Interactive Button */}
                        <div className="group relative bg-[#15161A] rounded-full cursor-pointer w-[200px] sm:w-[160px] md:w-[180px] lg:w-[229px] h-[52px] sm:h-[48px] md:h-[56px] lg:h-[64px] flex flex-row items-center justify-between px-[6px] transition-all ml-0 md:ml-3 lg:ml-7">
                            <span 
                                className="pl-5 text-white font-medium text-[16px] lg:text-[20px] z-10"
                                style={{ fontFamily: 'var(--font-clash-grotesk), sans-serif', fontWeight: 600 }}
                            >
                                Contact us
                            </span>
                            <div className="bg-white rounded-full w-[44px] sm:w-[40px] h-[40px] md:h-[48px] lg:h-[54px] lg:w-[54px] flex items-center justify-center transition-all duration-300 z-0">
                                <img
                                    src="/assets/Vector.svg"
                                    alt="Arrow Right"
                                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            
            {/* EXACT Original Hero Image Block - Left completely untouched */}
            <div className="relative w-full mt-[40px] sm:mt-[60px] md:mt-[70px] lg:mt-[70px] flex justify-end ">
                <Image
                    src="/assets/hero-architecture.png"
                    alt="Modern glass skyscraper architecture"
                    width={1320}
                    height={700}
                    className="w-full sm:w-full md:w-full lg:w-[1320px] h-[300px] sm:h-[400px] md:h-[550px] lg:h-[700px] object-cover object-bottom"
                />
            </div>
        </div>
    );
};

export default HeroSection;