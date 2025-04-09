import React from "react";

export const SupportSection = () => {
  return (
    <section className="flex flex-col relative min-h-[580px] w-full overflow-hidden items-center justify-center p-24 max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff6c30c0124bb6a21557f0ea681e0a7e770bd05b?placeholderIfAbsent=true"
        alt="Support Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[1144px] max-w-full flex-col items-stretch">
        <div className="self-center flex w-[768px] max-w-full flex-col items-stretch text-white font-medium text-center">
          <h2 className="text-[44px] leading-none tracking-[-0.88px] max-md:max-w-full">
            Still need our support?
          </h2>
          <p className="text-lg leading-loose self-center mt-4 max-md:max-w-full">
            Try one of these support options to get answers fast.
          </p>
        </div>

        <div className="flex w-full items-center gap-6 justify-center flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
          {[
            {
              title: "Contact Support",
              description:
                "Reach out to our support team anytime!we're available 24/7.",
              linkText: "Live Chat",
            },
            {
              title: "Tutorials",
              description:
                "Step-by-step guides to help you get the most out of JewelsLab.",
              linkText: "Browse Guides",
            },
            {
              title: "Submit a Ticket",
              description:
                "Have a specific issue? Send us a ticket and we'll follow up shortly.",
              linkText: "Submit Ticket",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white self-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] my-auto p-[30px] rounded-xl max-md:px-5"
            >
              <div className="flex min-h-6 w-6" />
              <div className="self-stretch w-full mt-6">
                <h3 className="text-[#1A1A1A] text-lg font-medium leading-[1.4] tracking-[-0.5px]">
                  {item.title}
                </h3>
                <p className="text-[#667085] text-base font-normal leading-6 mt-4">
                  {item.description}
                </p>
              </div>
              <button className="flex items-center gap-2 text-lg text-[rgba(71,109,242,1)] font-medium tracking-[-0.5px] leading-[1.4] mt-6">
                <span className="self-stretch my-auto">{item.linkText}</span>
                <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
