import React from 'react';
import Image from 'next/image';

const CommitmentSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-8 sm:py-12 md:py-16 lg:py-20 font-sans overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-[120px]">
      {/* Container matching your 1440px desktop grid. 
        mx-auto ensures it stays perfectly centered on ultra-wide monitors.
      */}
      <div className="w-full max-w-full lg:max-w-[1440px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-6 px-4 sm:px-6 md:px-8 lg:px-0">

        
        <div className="w-full border-y border-gray-200 py-6 sm:py-8 md:py-10 lg:py-[50px] pl-0 lg:pl-[90px] flex items-start flex-shrink-0">
          
          {/* Minimalist Horizontal Line Indicator */}
          <div className="w-3 sm:w-4 md:w-5 lg:w-6 h-[1px] sm:h-[1px] md:h-[1.5px] lg:h-[2px] bg-[#0B2530] mt-2 sm:mt-3 md:mt-4 lg:mt-5 shrink-0 mr-3 sm:mr-3 md:mr-4 lg:mr-6"></div>
          
          {/* Paragraph Statement */}
          <p 
            className="text-[#0B2530] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] w-full m-0"
            style={{ 
              fontFamily: 'var(--font-lato), sans-serif',
              fontWeight: 500,
              lineHeight: '1.4'
            }}
          >
            We are committed to helping our clients achieve their financial goals 
            through expert advice, innovative solutions, and unparalleled execution.
          </p>
        </div>

        {/* 3D Percentage Asset - Responsive */}
        <div className="hidden lg:block relative w-full lg:w-[400px] xl:w-[450px] 2xl:w-[520px] h-auto flex-shrink-0 pointer-events-none">
          <Image
            src="/assets/Rectangle 48.svg" 
            alt="3D Percentage Symbol"
            width={520}
            height={520}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default CommitmentSection;