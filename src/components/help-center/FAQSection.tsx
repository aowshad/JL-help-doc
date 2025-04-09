
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is JewelsLab?",
    answer: "JewelsLab is a Shopify app that helps merchants offer customizable jewelry to customers with a simple and intuitive interface. It enables real-time product customization, engraving, and visualization directly on your store.",
  },
  {
    question: "Is JewelsLab compatible with all Shopify themes?",
    answer: "Yes, JewelsLab is designed to be compatible with all Shopify themes. Our app uses a flexible integration approach that adapts to your store's design. If you encounter any theme-specific issues, our support team is ready to assist with custom integration solutions.",
  },
  {
    question: "Do I need coding knowledge to use JewelsLab?",
    answer: "Not at all! JewelsLab is built with a user-friendly interface that requires zero coding knowledge. You can set up and customize the app through our intuitive dashboard. However, for advanced customizations, we provide developer documentation if needed.",
  },
  {
    question: "Is there a preview feature for customers?",
    answer: "Yes, JewelsLab includes a real-time preview feature that allows customers to see exactly how their customized jewelry will look before purchasing. This interactive preview updates instantly as customers make customization choices, reducing uncertainty and boosting conversion rates.",
  },
  {
    question: "Can I upload custom fonts or icons for engraving?",
    answer: "Absolutely! JewelsLab supports custom font and icon uploads for engraving options. You can upload your own TTF/OTF font files or SVG icons through the admin dashboard, allowing you to offer truly unique customization options that match your brand identity.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your JewelsLab subscription at any time from your Shopify admin panel. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access to JewelsLab until the end of your current billing period.",
  },
];

export const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-[388px] py-24 max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="w-full font-medium text-center max-md:max-w-full">
          <div className="flex w-full flex-col items-center max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col items-stretch">
              <h2 className="text-[#101828] text-[44px] leading-none tracking-[-0.88px] max-md:max-w-full animate-fade-in">
                Frequently asked questions
              </h2>
              <p className="text-[#667085] text-lg leading-loose self-center mt-4 max-md:max-w-full animate-fade-in">
                Check out our most common questions
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center mt-12 max-md:max-w-full max-md:mt-10">
          <div className="items-center border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 flex gap-1 flex-wrap p-2 rounded-xl border-solid max-md:max-w-full">
            {["General", "Product Customization", "Orders & Fulfillment"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-md transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),0px_1px_2px_0px_rgba(16,24,40,0.06)] text-[#344054] font-semibold"
                      : "text-[#667085] hover:bg-white/50"
                  }`}
                >
                  <span>{tab}</span>
                  <span className="border border-[color:var(--Gray-200,#EAECF0)] bg-gray-50 text-sm font-medium text-center leading-none px-2.5 py-0.5 rounded-2xl border-solid">
                    {tab === "General"
                      ? "7"
                      : tab === "Product Customization"
                      ? "11"
                      : "5"}
                  </span>
                </button>
              )
            )}
          </div>

          <div className="flex w-full max-w-screen-xl flex-col items-center mt-9 px-8 max-md:max-w-full max-md:px-5">
            <div className="w-[768px] max-w-screen-md max-md:max-w-full">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className={`transition-all duration-300 ${index > 0 ? "border-t border-[#D0D5DD]" : "border-none"}`}
                  >
                    <AccordionTrigger className="py-6 hover:no-underline flex">
                      <div className="text-[#101828] text-lg font-medium leading-loose text-left">
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#475467] text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
