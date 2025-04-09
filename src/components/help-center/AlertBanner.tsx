import React, { useState } from "react";

export const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="items-center bg-[#FFD700] flex w-full flex-col max-md:max-w-full">
      <div className="flex items-center overflow-hidden px-8 py-3 max-md:max-w-full max-md:px-5">
        <div className="self-stretch flex min-w-60 items-center gap-3 flex-wrap my-auto max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-4 text-sm leading-none flex-wrap my-auto max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f00204fb47a37dae927c6ba6e7a8024a7e215a6?placeholderIfAbsent=true"
              alt="Alert"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto rounded-[20px]"
            />
            <div className="self-stretch flex min-w-60 gap-[2px_6px] flex-wrap my-auto max-md:max-w-full">
              <div className="text-[#101828] font-semibold">
                JewelsLab now supports live preview customization!
              </div>
              <div className="text-[#344054] font-normal">
                Check out what's new in the{" "}
                <a href="#" className="font-semibold underline">
                  latest update
                </a>
                .
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="self-stretch flex items-center gap-2 w-9 my-auto"
            aria-label="Close alert"
          >
            <div className="self-stretch flex min-h-9 w-9 items-center overflow-hidden justify-center my-auto p-2 rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f046c7924042bd6cc55f1dbee211740398611a7a?placeholderIfAbsent=true"
                alt="Close"
                className="aspect-[1] object-contain w-5 self-stretch my-auto"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
