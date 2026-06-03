"use client";

import Image from "next/image";
import { useState } from "react";

// Reusable SVG Star Component
const Star = () => (
    <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="#87909D"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
);

const StarsRow = () => (
    <div className="flex gap-[2px]">
        {[...Array(5)].map((_, i) => (
            <Star key={i} />
        ))}
    </div>
);

const cardShadow = "shadow-[0px_2px_16px_-4px_rgba(0,0,0,0.08)] border border-[#E5E7EB]";

// Texts matching the exact lengths in the image to ensure correct card heights/alignment
const commonText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

const mediumText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt";

const shortText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam";

// Extracted data for the mobile slider including images
const clientTestimonials = [
    { name: "Istiak Ahmed", role: "CEO, Avito", src: "/assets/client-1.svg", text: commonText },
    { name: "Jon Sari", role: "CEO, Avito", src: "/assets/client-1.1.svg", text: shortText },
    { name: "Rahul Deb", role: "CEO, Avito", src: "/assets/client-2.svg", text: shortText },
    { name: "Ahmed Saimoon", role: "CEO, Avito", src: "/assets/client-2.1.svg", text: commonText },
    { name: "Sakib Mo", role: "CEO, Avito", src: "/assets/client-2.2.svg", text: commonText },
    { name: "Nazmul Karim", role: "CEO, Avito", src: "/assets/client-3.svg", text: mediumText },
    { name: "Amir Khan", role: "CEO, Avito", src: "/assets/client-3.1.svg", text: mediumText },
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
    };

    return (
        <section className="w-full bg-white py-10 sm:py-14 lg:py-[80px] overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">

                {/* ── Heading ── */}
                <h2
                    className="text-center font-semibold text-[#758090] mb-8 sm:mb-10 lg:mb-[52px]"
                    style={{
                        fontFamily: "var(--font-lato), sans-serif",
                        fontSize: "clamp(28px, 5vw, 60px)",
                        lineHeight: 1.15,
                    }}
                >
                    What our Client Say's ?
                </h2>

                {/* ══════════════════════════════════
                    DESKTOP LAYOUT  (lg+)
                    3-track grid: [267px] [1fr] [293px]
                    ══════════════════════════════════ */}
                <div className="hidden lg:grid lg:grid-cols-[267px_1fr_293px] lg:gap-5 xl:gap-6">

                    {/* ── COL 1 ── */}
                    <div className="flex flex-col gap-5">

                        {/* Card 1: Istiak Ahmed – tall portrait top */}
                        <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow}`}>
                            <div className="relative w-full h-[182px]">
                                <Image
                                    src="/assets/client-1.svg"
                                    alt="Istiak Ahmed"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <p className="text-[#4B5563] text-[13px] leading-[170%] mb-4"
                                    style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                    {commonText}
                                </p>
                                <p className="text-[#111827] text-[13px]"
                                    style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                    Istiak Ahmed
                                </p>
                                <p className="text-[#6B7280] text-[12px] mb-2"
                                    style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                    CEO, Avito
                                </p>
                                <StarsRow />
                            </div>
                        </div>

                        {/* Card 2: Jon Sari – avatar row */}
                        <div className={`bg-white rounded-2xl p-4 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src="/assets/client-1.1.svg"
                                        alt="Jon Sari"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                        Jon Sari
                                    </p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                        CEO, Avito
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {shortText}
                            </p>
                        </div>
                    </div>

                    {/* ── COL 2 (center, fills remaining space) ── */}
                    <div className="flex flex-col gap-5">

                        {/* Card 3: Rahul Deb – wide side-by-side */}
                        <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow} flex h-[255px]`}>
                            <div className="relative shrink-0 w-[220px] h-full">
                                <Image
                                    src="/assets/client-2.svg"
                                    alt="Rahul Deb"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-8 py-6 flex-1">
                                <p className="text-[#4B5563] text-[13.5px] leading-[170%] mb-5">
                                    {shortText}
                                </p>
                                <p className="text-[#111827] text-[14px]"
                                    style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                    Rahul Deb
                                </p>
                                <p className="text-[#6B7280] text-[12px] mb-2">CEO, Avito</p>
                                <StarsRow />
                            </div>
                        </div>

                        {/* Card 4: Ahmed Saimoon */}
                        <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src="/assets/client-2.1.svg"
                                        alt="Ahmed Saimoon"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                        Ahmed Saimoon
                                    </p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                        CEO, Avito
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13.5px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {commonText}
                            </p>
                        </div>

                        {/* Card 5: Sakib Mo */}
                        <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src="/assets/client-2.2.svg"
                                        alt="Sakib Mo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                        Sakib Mo
                                    </p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                        CEO, Avito
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13.5px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {commonText}
                            </p>
                        </div>
                    </div>

                    {/* ── COL 3 ── */}
                    <div className="flex flex-col gap-5">

                        {/* Card 6: Nazmul Karim */}
                        <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src="/assets/client-3.svg"
                                        alt="Nazmul Karim"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                        Nazmul Karim
                                    </p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                        CEO, Avito
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {mediumText}
                            </p>
                        </div>

                        {/* Card 7: Amir Khan */}
                        <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src="/assets/client-3.1.svg"
                                        alt="Amir Khan"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 700 }}>
                                        Amir Khan
                                    </p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                        CEO, Avito
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {mediumText}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════
                    TABLET LAYOUT  (sm → lg)
                    2 columns
                    ══════════════════════════════════ */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">

                    {/* Card 1: Istiak Ahmed – portrait top */}
                    <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow}`}>
                        <div className="relative w-full h-[200px]">
                            <Image
                                src="/assets/client-1.svg"
                                alt="Istiak Ahmed"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-[#4B5563] text-[13px] leading-[165%] mb-3">{commonText}</p>
                            <p className="text-[#111827] text-[13px] font-bold">Istiak Ahmed</p>
                            <p className="text-[#6B7280] text-[12px] mb-2">CEO, Avito</p>
                            <StarsRow />
                        </div>
                    </div>

                    {/* Card 3: Rahul Deb – portrait top */}
                    <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow}`}>
                        <div className="relative w-full h-[200px]">
                            <Image
                                src="/assets/client-2.svg"
                                alt="Rahul Deb"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 50vw"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-[#4B5563] text-[13px] leading-[165%] mb-3">{shortText}</p>
                            <p className="text-[#111827] text-[13px] font-bold">Rahul Deb</p>
                            <p className="text-[#6B7280] text-[12px] mb-2">CEO, Avito</p>
                            <StarsRow />
                        </div>
                    </div>

                    {/* Cards 2, 4, 5, 6, 7 – avatar style */}
                    {[
                        { name: "Jon Sari",      role: "CEO, Avito", src: "/assets/client-1.1.svg", text: shortText },
                        { name: "Ahmed Saimoon", role: "CEO, Avito", src: "/assets/client-2.1.svg", text: commonText },
                        { name: "Sakib Mo",      role: "CEO, Avito", src: "/assets/client-2.2.svg", text: commonText },
                        { name: "Nazmul Karim",  role: "CEO, Avito", src: "/assets/client-3.svg",   text: mediumText },
                        { name: "Amir Khan",     role: "CEO, Avito", src: "/assets/client-3.1.svg", text: mediumText },
                    ].map(({ name, role, src, text }) => (
                        <div key={name} className={`bg-white rounded-2xl p-4 ${cardShadow}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image src={src} alt={name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px] font-bold">{name}</p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5">{role}</p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[165%]">{text}</p>
                        </div>
                    ))}
                </div>

                {/* ══════════════════════════════════
                    MOBILE LAYOUT  (< sm)
                    Slider layout without quote icon & matching background
                    ══════════════════════════════════ */}
                <div className="flex sm:hidden justify-center px-4">
                    <div className="bg-[#bcc1c7] rounded-[24px] p-5 pt-6 pb-8 w-full flex flex-col items-center">
                        
                        {/* Slide Card */}
                        <div className="bg-white rounded-[24px] border  p-6 pt-8 pb-6 w-full shadow-[0px_4px_16px_rgba(0,0,0,0.02)] min-h-[260px] flex flex-col justify-between transition-all duration-300">
                            
                            {/* Quote Text */}
                            <p 
                                className="text-black text-[15px] leading-[1.8] mb-8"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}
                            >
                                "{clientTestimonials[currentIndex].text}"
                            </p>

                            {/* Author Info with Image */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image
                                        src={clientTestimonials[currentIndex].src}
                                        alt={clientTestimonials[currentIndex].name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <p 
                                        className="text-[16px] font-bold text-black mb-0.5" 
                                        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                                    >
                                        {clientTestimonials[currentIndex].name}
                                    </p>
                                    <p 
                                        className="text-[#6B7280] text-[13px]"
                                        style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}
                                    >
                                        {clientTestimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex gap-4 justify-center mt-8">
                            <button 
                                onClick={prevSlide} 
                                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
                                aria-label="Previous Testimonial"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1L1 6L6 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button 
                                onClick={nextSlide} 
                                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-colors"
                                aria-label="Next Testimonial"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L1 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}