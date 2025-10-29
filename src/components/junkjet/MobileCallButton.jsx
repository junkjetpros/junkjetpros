import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    // Track GA4 event
    if (window.gtag) {
      window.gtag('event', 'jj_tel_click', {
        event_category: 'engagement',
        event_label: 'mobile_sticky_button'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl z-50 lg:hidden"
        >
          <a href="tel:4695550149" onClick={handleClick} className="block">
            <Button
              size="lg"
              className="w-full h-14 bg-[#00C2A8] hover:bg-[#00a890] text-white text-lg font-semibold shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (469) 555-0149
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}