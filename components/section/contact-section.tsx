"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#F5F5F5] overflow-hidden">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full lg:min-w-[1440px] h-[200px] sm:h-[280px] md:h-[377px] lg:h-[377px] overflow-hidden bg-black">
        <Image
          src="/assets/contact-banner.png"
          alt="Meeting Client Needs"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h1
            className="text-center text-white text-[28px] sm:text-[44px] lg:text-[76.6px] leading-[120%] lg:leading-[100%] tracking-[-0.03em] font-semibold w-full lg:min-w-[1295px]"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            MEETING THE NEEDS OF OUR CLIENTS
            <br />
            SINCE 2011
          </h1>
        </div>
      </div>

      {/* ================= Contact Form Section ================= */}
      <div className="max-w-[1312px] mx-auto px-4 sm:px-5 py-[40px] lg:py-[80px]">
        {/* Heading */}
        <h2
          className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold text-black mb-[30px] lg:mb-[50px] w-full lg:w-[685px] h-auto lg:h-[72px]"
          style={{
            fontFamily: "var(--font-lato), sans-serif",
            fontWeight: 600,
          }}
        >
          GET IN TOUCH WITH US
        </h2>

        {/* Form Container */}
        <div className="bg-white border border-[#E5E5E5] p-5 sm:p-6 lg:px-[50px] lg:py-[50px] w-full lg:w-[1312px] h-auto lg:h-[664px] shadow-[0px_1px_7px_0px_#00000021]">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[40px] gap-y-[28px] lg:gap-y-[40px]">
            <div>
              <label
                className="block text-[18px] lg:text-[24px] text-black mb-1"
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
              >
                Name *
              </label>

              <input
                type="text"
                placeholder=""
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
                className="w-full border-b border-[#828282] bg-transparent outline-none text-[16px] lg:text-[24px] text-black"
              />
            </div>

            <div>
              <label
                className="block text-[18px] lg:text-[24px] text-black mb-1"
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
              >
                Email Address *
              </label>

              <input
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
                type="email"
                className="w-full border-b border-[#828282] bg-transparent outline-none text-[16px] lg:text-[24px] text-black"
              />
            </div>

            <div>
              <label
                className="block text-[18px] lg:text-[24px] text-black mb-1"
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
              >
                Phone Number
              </label>

              <input
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
                type="text"
                className="w-full border-b border-[#828282] bg-transparent outline-none text-[16px] lg:text-[24px] text-black"
              />
            </div>

            <div>
              <label
                className="block text-[18px] lg:text-[24px] text-black mb-1"
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
              >
                Company Name
              </label>

              <input
                style={{
                  fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                  fontWeight: 400,
                }}
                type="text"
                className="w-full border-b border-[#828282] bg-transparent outline-none text-[16px] lg:text-[24px] text-black"
              />
            </div>
          </div>

          {/* Service Required */}
          <div className="mt-[28px] lg:mt-[40px]">
            <label
              className="block text-[18px] lg:text-[24px] text-black mb-4"
              style={{
                fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                fontWeight: 400,
              }}
            >
              Service Required *
            </label>

            <select
              className="w-full border-b border-[#828282] bg-transparent pb-3 outline-none text-[16px] lg:text-[24px] text-black"
              style={{
                fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                fontWeight: 400,
              }}
            >
              <option>Select Service</option>
              <option>Audit Services</option>
              <option>Accounting Services</option>
              <option>VAT Services</option>
              <option>Corporate Tax</option>
            </select>
          </div>

          {/* Message */}
          <div className="mt-[28px] lg:mt-[40px]">
            <label
              className="block text-[18px] lg:text-[24px] text-black mb-1"
              style={{
                fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                fontWeight: 400,
              }}
            >
              Message
            </label>

            <textarea
              style={{
                fontFamily: "var(--font-clash-grotesk-medium), sans-serif",
                fontWeight: 400,
              }}
              rows={2}
              className="w-full resize-none border-b border-[#828282] bg-transparent outline-none text-[16px] lg:text-[24px] text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-[28px] lg:mt-[40px]">
            <button
              className="w-full sm:w-[257px] h-[44px] rounded-[6px] bg-[#0A0B1F] text-white text-[18px] lg:text-[20px] duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-clash-grotesk), sans-serif",
                fontWeight: 600,
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-[24px] sm:mt-[30px] md:mt-[36px] lg:mt-[50px]">
          {/* Call */}
          <div className="flex items-start gap-4">
            <Image
              src="/assets/phone.svg"
              alt="Phone"
              width={28}
              height={28}
              className="mt-1"
            />

            <div>
              <h4
                className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[#000000]"
                style={{
                  fontFamily: "var(--font-clash-grotesk-reg), sans-serif",
                  fontWeight: 500,
                }}
              >
                Call
              </h4>

              <p
                className="text-[#606060] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
                style={{
                  fontFamily: "var(--font-rubik), sans-serif",
                  fontWeight: 400,
                }}
              >
                +971-50-6918196
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Image
              src="/assets/email.svg"
              alt="Email"
              width={28}
              height={28}
              className="mt-1"
            />

            <div>
              <h4
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-medium text-[#000000]"
                style={{
                  fontFamily: "var(--font-rubik), sans-serif",
                  fontWeight: 400,
                }}
              >
                Email
              </h4>

              <p
                className="text-[#606060] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]"
                style={{
                  fontFamily: "var(--font-rubik), sans-serif",
                  fontWeight: 400,
                }}
              >
                mail@saifaqca.com
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 sm:col-span-2 md:col-span-1">
            <Image
              src="/assets/location.svg"
              alt="Location"
              width={28}
              height={28}
              className="mt-1"
            />

            <div>
              <h4
                className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-medium text-[#000000]"
                style={{
                  fontFamily: "var(--font-rubik), sans-serif",
                  fontWeight: 400,
                }}
              >
                Location
              </h4>

              <p className="text-[#606060] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] w-full lg:w-[330px] h-auto lg:h-[63px]">
                Abdullah Kamber Business Center M Floor - 1, Hor Al Anz Dubai,
                United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}