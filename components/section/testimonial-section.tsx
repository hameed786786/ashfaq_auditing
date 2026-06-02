"use client";

import Image from "next/image";

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

const commonText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

const shortText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam";

export default function TestimonialSection() {
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
                            <div className="flex items-start gap-3 mb-3">
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
                                {commonText}
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
                            <div className="flex items-start gap-3 mb-3">
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
                                        CEO, Figma
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
                            <div className="flex items-start gap-3 mb-3">
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
                                        CEO, Slack
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
                            <div className="flex items-start gap-3 mb-3">
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
                                        CEO, Dribbble
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {commonText}
                            </p>
                        </div>

                        {/* Card 7: Amir Khan */}
                        <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                            <div className="flex items-start gap-3 mb-3">
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
                                        CEO, Stripe
                                    </p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[170%]"
                                style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 400 }}>
                                {commonText}
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
                        { name: "Jon Sari",      role: "CEO, Avito",    src: "/assets/client-1.1.svg" },
                        { name: "Ahmed Saimoon", role: "CEO, Figma",    src: "/assets/client-2.1.svg" },
                        { name: "Sakib Mo",      role: "CEO, Slack",    src: "/assets/client-2.2.svg" },
                        { name: "Nazmul Karim",  role: "CEO, Dribbble", src: "/assets/client-3.svg"   },
                        { name: "Amir Khan",     role: "CEO, Stripe",   src: "/assets/client-3.1.svg" },
                    ].map(({ name, role, src }) => (
                        <div key={name} className={`bg-white rounded-2xl p-4 ${cardShadow}`}>
                            <div className="flex items-start gap-3 mb-3">
                                <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image src={src} alt={name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px] font-bold">{name}</p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5">{role}</p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-[13px] leading-[165%]">{commonText}</p>
                        </div>
                    ))}
                </div>

                {/* ══════════════════════════════════
                    MOBILE LAYOUT  (< sm)
                    Single column, full-width cards
                    ══════════════════════════════════ */}
                <div className="flex sm:hidden flex-col gap-4">

                    {/* Card 1: Istiak Ahmed – image fills width via aspect ratio */}
                    <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow}`}>
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src="/assets/client-1.svg"
                                alt="Istiak Ahmed"
                                fill
                                className="object-cover object-top"
                                sizes="100vw"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-[#4B5563] text-sm leading-[170%] mb-3">{commonText}</p>
                            <p className="text-[#111827] text-[13px] font-bold">Istiak Ahmed</p>
                            <p className="text-[#6B7280] text-[12px] mb-2">CEO, Avito</p>
                            <StarsRow />
                        </div>
                    </div>

                    {/* Card 3: Rahul Deb – side-by-side, fixed image width */}
                    <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow} flex`}>
                        <div className="relative shrink-0 w-[120px] self-stretch">
                            <Image
                                src="/assets/client-2.svg"
                                alt="Rahul Deb"
                                fill
                                className="object-cover object-top"
                                sizes="120px"
                            />
                        </div>
                        <div className="flex flex-col justify-center px-4 py-4 flex-1 min-w-0">
                            <p className="text-[#4B5563] text-[12px] leading-[165%] mb-3">{shortText}</p>
                            <p className="text-[#111827] text-[13px] font-bold">Rahul Deb</p>
                            <p className="text-[#6B7280] text-[12px] mb-2">CEO, Avito</p>
                            <StarsRow />
                        </div>
                    </div>

                    {/* Cards 2, 4, 5, 6, 7 – avatar style stacked */}
                    {[
                        { name: "Jon Sari",      role: "CEO, Avito",    src: "/assets/client-1.1.svg" },
                        { name: "Ahmed Saimoon", role: "CEO, Figma",    src: "/assets/client-2.1.svg" },
                        { name: "Sakib Mo",      role: "CEO, Slack",    src: "/assets/client-2.2.svg" },
                        { name: "Nazmul Karim",  role: "CEO, Dribbble", src: "/assets/client-3.svg"   },
                        { name: "Amir Khan",     role: "CEO, Stripe",   src: "/assets/client-3.1.svg" },
                    ].map(({ name, role, src }) => (
                        <div key={name} className={`bg-white rounded-2xl p-4 ${cardShadow}`}>
                            <div className="flex items-start gap-3 mb-3">
                                <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                    <Image src={src} alt={name} fill className="object-cover" sizes="42px" />
                                </div>
                                <div>
                                    <p className="text-[#111827] text-[13px] font-bold">{name}</p>
                                    <p className="text-[#6B7280] text-[12px] mb-1.5">{role}</p>
                                    <StarsRow />
                                </div>
                            </div>
                            <p className="text-[#4B5563] text-sm leading-[170%]">{commonText}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}