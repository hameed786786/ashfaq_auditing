"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-7 lg:pb-8 px-4 sm:px-4 md:px-5 lg:px-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Navigation Row */}
        <div
          style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
          className="ml-0 md:ml-3 lg:ml-[40px] flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFFCC] font-medium"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact us
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 justify-between">

          {/* Left Column - Company Info */}
          <div className="w-full lg:w-[502px]">
            <h2
              className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] mb-2 sm:mb-3 md:mb-4 lg:mb-6"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              ASHFAQ AND ASSOCIATES
            </h2>
            <p
              className="text-[#FFFFFF99] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[160%] sm:leading-[166%] font-medium"
              style={{ fontFamily: "var(--font-clash-grotesk-medium), sans-serif" }}
            >
              To comply with regulations stipulated by the Code of Ethics prescribed
              by The Institute of Chartered Accountants of India (ICAI) that does not
              permit solicitation in any form or manner, by accessing this site you
              acknowledge that you are seeking information of your own accord and
              volition and that no form of solicitation.
            </p>
          </div>

          {/* Right Column - Newsletter & Socials */}
          <div className="flex flex-col lg:items-end w-full lg:w-auto">
            <div className="w-full lg:w-[450px]">
              <p className="text-[12px] sm:text-[13px] md:text-[15px] text-white mb-3 sm:mb-4 lg:mb-5">
                Enter your email to get our weekly newsletter
              </p>

              {/* Newsletter Input */}
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center w-full h-auto sm:h-[60px] bg-[#222222] rounded-full p-1.5 sm:p-1.5 border border-white/5 gap-1.5 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="flex-1 h-[36px] sm:h-full bg-transparent px-3 sm:px-6 text-white text-[11px] sm:text-[13px] md:text-[15px] outline-none placeholder:text-[#888888]"
                />
                <button className="h-[34px] sm:h-[45px] px-6 sm:px-8 bg-[#8759FF] hover:bg-[#7a4de6] text-white text-[11px] sm:text-[13px] md:text-[15px] font-medium rounded-full transition-colors whitespace-nowrap flex-shrink-0">
                  Join Now
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 lg:ml-2">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[32px] h-[18px] sm:h-[20px] md:h-[24px] lg:h-[32px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    width={16.79}
                    height={33.58}
                    className="w-[10px] sm:w-[12px] md:w-[14px] lg:w-[16.79px] h-[20px] sm:h-[24px] md:h-[28px] lg:h-[33.58px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/twitter.svg"
                    alt="Twitter"
                    width={33.58}
                    height={26.87}
                    className="w-[20px] sm:w-[22px] md:w-[28px] lg:w-[33.58px] h-[16px] sm:h-[18px] md:h-[22px] lg:h-[26.87px]"
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/assets/instagram.svg"
                    alt="Instagram"
                    width={33.58}
                    height={33.58}
                    className="w-[18px] sm:w-[20px] md:w-[24px] lg:w-[33.58px] h-[18px] sm:h-[20px] md:h-[24px] lg:h-[33.58px]"
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-[#222222] mt-12 lg:mt-20"></div>
      </div>
    </footer>
  );
}