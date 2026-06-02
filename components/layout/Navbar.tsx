"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block relative mx-auto max-w-[1440px] sm:px-4 md:px-8 lg:px-0 sm:h-16 md:h-20 lg:h-24 h-16 bg-transparent">

        {/* Company Branding */}
        <div className="absolute sm:left-4 md:left-6 lg:left-16 top-1/2 -translate-y-1/2 cursor-pointer group whitespace-nowrap inline-block">
          <img
            src="/assets/Img - logo_margin.svg"
            alt="Ashfaq and Associates Logo"
            className="inline-block align-middle sm:h-[24px] sm:w-[36px] md:h-[28px] md:w-[42px] lg:h-[32px] lg:w-[50px] object-contain transition-transform duration-300 group-hover:scale-105 mr-[10px] md:mr-[14px]"
          />

          <span
            className="inline-block align-middle text-[#0B2530]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px,1.2vw,22px)",
            }}
          >
            Ashfaq and Associates
          </span>
        </div>

        {/* Navigation Links */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
          style={{
            fontFamily: "var(--font-clash-grotesk), sans-serif",
            fontWeight: 600,
          }}
        >
          <a
            href="#home"
            className="text-[#0B2530] text-[16px] lg:text-[20px] hover:opacity-80 transition-opacity mr-[32px] lg:mr-[48px]"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-[#0B2530] text-[16px] lg:text-[20px] hover:opacity-80 transition-opacity mr-[32px] lg:mr-[48px]"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-[#0B2530] text-[16px] lg:text-[20px] hover:opacity-80 transition-opacity"
          >
            Contact Us
          </a>
        </div>

        {/* CTA */}
        <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2">
          <button
            className="bg-[#121624] w-[120px] lg:w-[134px] text-white h-[42px] lg:h-[44px] rounded-[12px] hover:bg-[#1a2035] transition-colors"
            style={{
              fontFamily: "var(--font-clash-grotesk), sans-serif",
              fontWeight: 600,
            }}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="flex md:hidden h-[72px] items-center justify-between px-[16px] relative">

        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/Img - logo_margin.svg"
            alt="Logo"
            className="w-[42px] h-auto object-contain"
          />

          <p
            className="ml-[8px] text-[12px] leading-[15px] text-[#0B2530] max-w-[110px]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
            }}
          >
            Ashfaq & Associates
          </p>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="h-[40px] w-[40px] flex items-center justify-center"
        >
          <HiOutlineMenuAlt3
            size={30}
            className="text-[#121624]"
          />
        </button>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-[100]
          transition-all
          duration-300

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[280px]
          bg-white
          z-[200]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-[24px] right-[20px]"
        >
          <HiX
            size={28}
            className="text-[#121624]"
          />
        </button>

        {/* Links */}
        <div
          className="mt-[100px] px-[28px]"
          style={{
            fontFamily: "var(--font-clash-grotesk), sans-serif",
            fontWeight: 600,
          }}
        >
          <a
            href="#home"
            className="block mb-[28px] text-[20px] text-[#0B2530]"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#services"
            className="block mb-[28px] text-[20px] text-[#0B2530]"
            onClick={() => setOpen(false)}
          >
            Services
          </a>

          <a
            href="#contact"
            className="block mb-[28px] text-[20px] text-[#0B2530]"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>

        {/* Contact Button */}
        <button
          className="
            absolute
            bottom-[40px]
            left-[24px]
            w-[220px]
            h-[54px]
            rounded-full
            bg-[#121624]
            text-white
            text-[15px]
            font-semibold
          "
          onClick={() => setOpen(false)}
        >
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Navbar;