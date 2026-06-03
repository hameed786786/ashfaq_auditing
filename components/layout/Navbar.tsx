"use client";

import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block relative mx-auto w-full max-w-[1440px] h-20 lg:h-28 bg-transparent">
        {/* Company Branding */}
        <div className="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 flex items-center cursor-pointer group">
          <img
            src="/assets/Img - logo_margin.svg"
            alt="Ashfaq and Associates Logo"
            className="h-[28px] w-auto lg:h-[36px] object-contain transition-transform duration-300 group-hover:scale-105 mr-3 lg:mr-4"
          />
          <span
            className="text-[#0B2530]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.2vw, 22px)",
            }}
          >
            Ashfaq and Associates
          </span>
        </div>

        {/* Navigation Links */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10 lg:gap-14"
          style={{
            fontFamily: "var(--font-clash-grotesk), sans-serif",
            fontWeight: 600,
          }}
        >
          <a href="#home" className="text-[#0B2530] text-[16px] lg:text-[18px] hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="#services" className="text-[#0B2530] text-[16px] lg:text-[18px] hover:opacity-80 transition-opacity">
            Services
          </a>
          <a href="#contact" className="text-[#0B2530] text-[16px] lg:text-[18px] hover:opacity-80 transition-opacity">
            Contact Us
          </a>
        </div>

        {/* CTA */}
        <div className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2">
          <button
            className="bg-[#121624] w-[120px] lg:w-[134px] text-white h-[42px] lg:h-[46px] rounded-[10px] hover:bg-[#1a2035] transition-colors text-[14px] lg:text-[16px]"
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
      <nav className="flex md:hidden h-[72px] items-center justify-between px-4 relative z-50">
        <div className="flex items-center">
          <img src="/assets/Img - logo_margin.svg" alt="Logo" className="w-[36px] h-auto object-contain" />
          <p
            className="ml-2 text-[14px] text-[#0B2530]"
            style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}
          >
            Ashfaq & Associates
          </p>
        </div>
        <button onClick={() => setOpen(true)} className="h-[40px] w-[40px] flex items-center justify-center">
          <HiOutlineMenuAlt3 size={28} className="text-[#121624]" />
        </button>
      </nav>

      {/* ================= MOBILE OVERLAY & SIDEBAR ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-[200] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setOpen(false)} className="absolute top-[24px] right-[20px]">
          <HiX size={28} className="text-[#121624]" />
        </button>
        <div
          className="mt-[100px] px-[28px] flex flex-col gap-8"
          style={{ fontFamily: "var(--font-clash-grotesk), sans-serif", fontWeight: 600 }}
        >
          <a href="#home" className="text-[20px] text-[#0B2530]" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" className="text-[20px] text-[#0B2530]" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" className="text-[20px] text-[#0B2530]" onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;