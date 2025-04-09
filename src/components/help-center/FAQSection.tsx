import React, { useState } from "react";
interface FAQItem {
  question: string;
  answer?: string;
}
const faqs: FAQItem[] = [{
  question: "What is JewelsLab?",
  answer: "JewelsLab is a Shopify app that helps merchants offer customizable jewelry to customers with a simple and intuitive interface."
}, {
  question: "Is JewelsLab compatible with all Shopify themes?"
}, {
  question: "Do I need coding knowledge to use JewelsLab?"
}, {
  question: "Is there a preview feature for customers?"
}, {
  question: "Can I upload custom fonts or icons for engraving?"
}, {
  question: "Can I cancel my subscription anytime?"
}];
export const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [expandedIndex, setExpandedIndex] = useState(0);
  return <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-[388px] py-24 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="w-full font-medium text-center max-md:max-w-full">
          <div className="flex w-full flex-col items-center max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col items-stretch">
              <h2 className="text-[#101828] text-[44px] leading-none tracking-[-0.88px] max-md:max-w-full">
                Frequently asked questions
              </h2>
              <p className="text-[#667085] text-lg leading-loose self-center mt-4 max-md:max-w-full">
                Check out our most common questions
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center mt-12 max-md:max-w-full max-md:mt-10">
          <div className="items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex gap-1 flex-wrap p-2 rounded-xl border-solid max-md:max-w-full">
            {["General", "Product Customization", "Orders & Fulfillment"].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center gap-2 px-3 py-2.5 rounded-md ${activeTab === tab ? "bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),0px_1px_2px_0px_rgba(16,24,40,0.06)] text-[#344054] font-semibold" : "text-[#667085]"}`}>
                  <span>{tab}</span>
                  <span className="border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 text-sm font-medium text-center leading-none px-2.5 py-0.5 rounded-2xl border-solid">
                    {tab === "General" ? "7" : tab === "Product Customization" ? "11" : "5"}
                  </span>
                </button>)}
          </div>

          <div className="flex w-full max-w-screen-xl flex-col items-center mt-9 px-8 max-md:max-w-full max-md:px-5">
            <div className="w-[768px] max-w-screen-md max-md:max-w-full">
              {faqs.map((faq, index) => <div key={index} className={`min-w-80 ${index > 0 ? "border-t border-[#D0D5DD] mt-8 pt-6" : ""}`}>
                  <button onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)} className="flex w-full gap-6 flex-wrap max-md:max-w-full text-left">
                    <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                      <div className="text-[#101828] text-lg font-medium leading-loose max-md:max-w-full">
                        {faq.question}
                      </div>
                      {expandedIndex === index && faq.answer && <div className="text-[#475467] text-base font-normal leading-6 mt-2 max-md:max-w-full">
                          {faq.answer}
                        </div>}
                    </div>
                    <div className="w-6 pt-0.5">
                      <img src={expandedIndex === index ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2692d9a418436378cb4cec703e376677fa4415df?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/9a07936382c59ddcf66c0a370dc7cc6d02e01c37?placeholderIfAbsent=true"} alt={expandedIndex === index ? "Collapse" : "Expand"} className="aspect-[1] object-contain w-6" />
                    </div>
                  </button>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};