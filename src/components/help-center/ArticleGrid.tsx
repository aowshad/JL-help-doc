
import React from "react";
import { ArticleCard } from "./ArticleCard";

const articles = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b29c2c70d7f5aa99aec6d7c8906b2f4c12e2972b?placeholderIfAbsent=true",
    title: "Getting Started",
    description:
      "Set up JewelsLab with your Shopify store in just a few steps.",
    articleCount: 7,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/383a445a07312356b5a0efa8752e38987d0351c3?placeholderIfAbsent=true",
    title: "Jewelry Customization",
    description:
      "Learn how to offer personalized jewelry options like engraving & stone choice.",
    articleCount: 30,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1ea9a2b9fe56103e502f2c79eb0b9f6b87aeee9?placeholderIfAbsent=true",
    title: "Design & Theme Integration",
    description:
      "Customize the look of the app to match your store theme perfectly.",
    articleCount: 14,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65f26bbbbcbb4e49dc52dd8397c440dcbd135f9?placeholderIfAbsent=true",
    title: "Product Management",
    description: "Manage customizable products, variants, and SKUs with ease.",
    articleCount: 7,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d959eb84c89b4623944e676949fd8ef09650d11?placeholderIfAbsent=true",
    title: "Order Processing",
    description:
      "Track, view, and manage custom orders with complete customer details.",
    articleCount: 3,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b79cd111f454339c317b1ca99c3162c05578738?placeholderIfAbsent=true",
    title: "Pricing & Billing",
    description:
      "Set up pricing for personalization and learn how billing works.",
    articleCount: 4,
  },
];

export const ArticleGrid = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center justify-center p-24 max-md:max-w-full max-md:px-5">
      <div className="w-[1144px] max-w-full">
        <h2 className="text-[rgba(100,100,100,1)] text-2xl font-medium text-center max-md:max-w-full">
          Explore our complete guide to setting up your jewelry store with{" "}
          <span className="text-black">JewelsLab</span>
        </h2>
        <div className="w-full mt-[30px] max-md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
