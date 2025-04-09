
import React, { useState } from "react";
import { Globe } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [language, setLanguage] = useState("English (US)");
  
  const languages = [
    "English (US)",
    "Español",
    "Français",
    "Deutsch",
    "Italiano",
    "日本語",
    "한국어"
  ];

  return (
    <header className="justify-between items-center border-b-[color:var(--Black,#1A1A1A)] bg-[#1A1A1A] flex w-full gap-[40px_100px] overflow-hidden flex-wrap px-24 py-6 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-2 my-auto">
        <div className="self-stretch flex items-center gap-[7px] my-auto">
          <img
            alt="JewelsLab Logo"
            src="/lovable-uploads/469b7675-f266-43ff-a540-066ec862c5c7.png"
            className="h-8 my-auto object-contain"
          />
        </div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-5 text-base my-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="self-stretch flex items-center gap-2 overflow-hidden text-white font-normal my-auto px-3.5 py-2.5 rounded-lg transition-colors hover:bg-white/10 active:bg-white/20">
              <Globe className="h-5 w-5" />
              <span className="self-stretch my-auto">{language}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
              >
                <path 
                  d="M5 7.5L10 12.5L15 7.5" 
                  stroke="currentColor" 
                  strokeWidth="1.66667" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end" 
            className="w-[180px] animate-in fade-in-80 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
          >
            {languages.map((lang) => (
              <DropdownMenuItem 
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`cursor-pointer transition-colors ${language === lang ? 'bg-accent font-medium' : 'hover:bg-accent'}`}
              >
                {lang}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer hover:bg-accent">
              Add new language
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#FFD700] self-stretch flex gap-1.5 overflow-hidden text-[#1A1A1A] font-semibold my-auto px-4 py-2.5 rounded-lg hover:bg-[#FFE44D] transition-colors active:bg-[#E6C200]">
          <span className="self-stretch my-auto px-0.5">Submit a Ticket</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d752aec4008591a4f29668f1619163bcfa088041?placeholderIfAbsent=true"
            alt="Submit"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </header>
  );
};
