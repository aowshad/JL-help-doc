
import React from "react";

interface ArticleCardProps {
  icon: string;
  title: string;
  description: string;
  articleCount: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  icon,
  title,
  description,
  articleCount,
}) => {
  return (
    <div className="items-stretch border border-[color:var(--Grey,#C0C0C0)] self-stretch flex min-w-60 flex-col justify-center w-[368px] my-auto p-6 rounded-2xl border-solid max-md:px-5 bg-white hover:bg-[#FFFDF0] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="flex min-w-80 w-full flex-col items-stretch">
        <div className="w-full">
          <div className="bg-gray-100 rounded-lg p-3 inline-block hover:bg-[#FFD700] transition-colors duration-300">
            <img
              src={icon}
              alt={title}
              className="aspect-[1] object-contain w-12 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
            />
          </div>
          <div className="w-full mt-5">
            <h3 className="text-[#101828] text-xl font-semibold">{title}</h3>
            <p className="text-[#475467] text-base font-normal leading-6 mt-2">
              {description}
            </p>
          </div>
        </div>
        <div className="gap-2 overflow-hidden text-base text-[rgba(123,123,123,1)] font-normal mt-9">
          {articleCount} articles
        </div>
      </div>
    </div>
  );
};
