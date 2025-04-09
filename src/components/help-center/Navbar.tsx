import React from "react";
export const Navbar = () => {
  return <header className="justify-between items-center border-b-[color:var(--Black,#1A1A1A)] bg-[#1A1A1A] flex w-full gap-[40px_100px] overflow-hidden flex-wrap px-24 py-6 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-2 my-auto">
        <div className="self-stretch flex items-center gap-[7px] my-auto">
          <img alt="JewelsLab Logo" src="/lovable-uploads/624da5d1-4db4-4108-bee2-849651f03467.png" className="aspect-[0.94] w-12 self-stretch my-auto object-cover" />
        </div>
        
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-5 text-base my-auto">
        <button className="self-stretch flex items-center gap-2 overflow-hidden text-white font-normal my-auto px-3.5 py-2.5 rounded-lg">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4180b3c6fb34fb8ba91edd2724b077afb524321f?placeholderIfAbsent=true" alt="Language" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
          <span className="self-stretch my-auto">English (US)</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9239dfdd0100004115802d0d27559777df27f3f?placeholderIfAbsent=true" alt="Dropdown" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" />
        </button>
        <button className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFD700] self-stretch flex gap-1.5 overflow-hidden text-[#1A1A1A] font-semibold my-auto px-4 py-2.5 rounded-lg">
          <span className="self-stretch my-auto px-0.5">Submit a Ticket</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d752aec4008591a4f29668f1619163bcfa088041?placeholderIfAbsent=true" alt="Submit" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" />
        </button>
      </div>
    </header>;
};