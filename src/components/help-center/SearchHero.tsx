import React, { useState } from "react";

export const SearchHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="flex flex-col relative min-h-[443px] w-full overflow-hidden items-center justify-center p-24 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3836a6090623f0bb9152d099ca54b10e10b148a7?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[851px] max-w-full flex-col items-stretch">
        <div className="w-full text-white font-medium text-center max-md:max-w-full">
          <h1 className="text-5xl max-md:max-w-full max-md:text-[40px]">
            Welcome to JewelsLab Help Center
          </h1>
          <p className="text-lg mt-2 max-md:max-w-full">
            Hello!👋 What can we help you with?
          </p>
        </div>
        <div className="self-center flex w-[750px] max-w-full flex-col items-stretch mt-9">
          <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex min-h-14 w-full gap-2 text-base text-[#667085] font-normal px-3.5 py-4 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full">
            <div className="self-stretch flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ced7a04f71fa84327f48ac87666ad587378cd2?placeholderIfAbsent=true"
                alt="Search"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="i need help with.."
                className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent border-none outline-none"
              />
            </div>
          </div>
          <div className="self-center flex gap-3 flex-wrap mt-6 max-md:max-w-full">
            <div className="text-[#C0C0C0] text-lg font-medium tracking-[0.18px]">
              Popular searches:
            </div>
            <div className="flex min-w-60 items-center gap-2 text-xs text-[rgba(255,215,0,1)] font-normal tracking-[-0.36px] leading-loose">
              <button className="self-stretch bg-[rgba(255,215,0,0.1)] gap-2.5 my-auto px-3 py-1 rounded-lg">
                how to customize jewelry
              </button>
              <button className="self-stretch bg-[rgba(255,215,0,0.1)] gap-2.5 my-auto px-3 py-1 rounded-lg">
                change color
              </button>
              <button className="self-stretch bg-[rgba(255,215,0,0.1)] gap-2.5 my-auto px-3 py-1 rounded-lg">
                jewelry item
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
