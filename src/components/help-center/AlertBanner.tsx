
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Optional: Add a slight delay for the banner to appear for a better effect
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="items-center bg-[#FFD700] flex w-full flex-col max-md:max-w-full relative"
        >
          <div className="flex items-center overflow-hidden px-8 py-3 max-md:max-w-full max-md:px-5 w-full">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="self-stretch flex min-w-60 items-center gap-3 flex-wrap my-auto max-md:max-w-full"
            >
              <div className="self-stretch flex min-w-60 items-center gap-4 text-sm leading-none flex-wrap my-auto max-md:max-w-full">
                <motion.img
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
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
                    <motion.a 
                      href="#" 
                      className="font-semibold underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      latest update
                    </motion.a>
                    .
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsVisible(false)}
                className="self-stretch flex items-center gap-2 w-9 my-auto"
                aria-label="Close alert"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="self-stretch flex min-h-9 w-9 items-center overflow-hidden justify-center my-auto p-2 rounded-lg hover:bg-black/10 transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f046c7924042bd6cc55f1dbee211740398611a7a?placeholderIfAbsent=true"
                    alt="Close"
                    className="aspect-[1] object-contain w-5 self-stretch my-auto"
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
