"use client";

import React from 'react';
import { Star } from 'lucide-react';

/**
 * CTAButton Component (Wingstop High-Converting Edition)
 * 
 * High-converting primary CTA button styled with Wingstop Green tones (#00703a), 
 * vibrant gold star accents, subtle shine animation, pulse border, and a thumb-friendly full-width layout.
 */
export default function CTAButton() {
  const url = "https://giftclick.org/aff_c?offer_id=893&aff_id=183864&source=Wingstop";

  const handleClick = (e: React.MouseEvent) => {
    // For Orchids preview environment
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-4 flex flex-col items-center mt-5 mb-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full h-[52px] sm:h-[58px] bg-[#00703a] hover:bg-[#005a2e] text-white rounded-full flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(0,112,58,0.4)] hover:shadow-[0_12px_30px_rgba(0,112,58,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden no-underline border border-white/20 animate-pulse"
      >
        {/* Continuous Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -left-full group-hover:animate-shine pointer-events-none" />

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 relative z-10">
          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFC220] text-[#FFC220] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,194,32,0.7))' }}
          />

          <span className="text-[14px] sm:text-[16px] font-black uppercase text-white tracking-[0.14em] drop-shadow-sm">
            START REVIEW
          </span>

          <Star 
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#FFC220] text-[#FFC220] flex-shrink-0" 
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,194,32,0.7))' }}
          />
        </div>
      </a>

      {/* Trust Subtext */}
      <p className="mt-2.5 text-[#00703a]/80 text-[10px] sm:text-[11px] font-bold tracking-tight text-center italic">
        (Instant approval - No purchase required)
      </p>

      {/* Ambient Green Floor Glow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-[#00703a]/25 blur-xl -z-10 rounded-full pointer-events-none" />
    </div>
  );
}
