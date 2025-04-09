import React from "react";
export const Footer = () => {
  return <footer className="bg-[rgba(244,244,244,1)] w-full overflow-hidden pt-12 px-24 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48422bdc22f97621f9494a147a9cb9e9be8a357?placeholderIfAbsent=true" alt="JewelsLab Logo" className="aspect-[3.77] object-contain w-[264px] self-stretch min-w-60 shrink-0 my-auto" />
          <nav className="self-stretch flex min-w-60 items-center gap-[40px_44px] text-lg text-[#1A1A1A] font-medium leading-none flex-wrap my-auto max-md:max-w-full">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Visit Website
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              API Docs
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Release Notes
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Terms of Service
            </a>
          </nav>
          <div className="self-stretch min-w-60 w-72 my-auto">
            <div className="flex w-full items-center gap-5">
              <a href="#" aria-label="Social Media">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c486365b8a071a7f3faefac611371f66a8485deb?placeholderIfAbsent=true" alt="Social Icon" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
              </a>
              <a href="#" aria-label="Social Media">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6dc173d2729c4c8a24579d6a0651fa0c7a4d2f?placeholderIfAbsent=true" alt="Social Icon" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
              </a>
              <a href="#" aria-label="Social Media">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b515323a68396a2331adff96b4f3cf29f9cd3a6f?placeholderIfAbsent=true" alt="Social Icon" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full text-base text-black font-normal mt-12 pb-10 max-md:max-w-full max-md:mt-10">
          <div className="border bg-[#C0C0C0] min-h-0 w-full border-[rgba(192,192,192,1)] border-solid max-md:max-w-full" />
          <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-10 max-md:max-w-full">
            <div>
              © 2025 <span className="font-semibold">JewelsLab</span>. All
              rights reserved.
            </div>
            <div className="self-stretch min-w-60">Powered by ParseLab LLC</div>
          </div>
        </div>
      </div>
    </footer>;
};