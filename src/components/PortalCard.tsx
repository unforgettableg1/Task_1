"use client";

import { motion } from "framer-motion";

export function PortalCard() {
  return (
    <motion.div
      className="absolute bg-[#e8edf7] rounded-2xl p-4 w-52 shadow-lg border-l-4 border-[#8b97c8] cursor-default"
      style={{ rotate: -4 }}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        scale: 1,
      }}
      transition={{
        opacity: { delay: 0.35, duration: 0.5 },
        scale: { delay: 0.35, duration: 0.5 },
        y: {
          delay: 0.9,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 14px 36px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-9 h-9 rounded-full bg-[#c0a882] flex items-center justify-center text-lg flex-shrink-0">
          🧑🏾
        </div>
        <div>
          <span className="font-bold text-[13px] text-brand-dark">
            John Doe
          </span>
          <span className="ml-1.5 text-[10px] font-semibold text-[#5a6895] bg-[#5a6895]/10 px-1.5 py-0.5 rounded">
            Portal
          </span>
        </div>
      </div>
      <p className="text-[12px] text-[#6e7a9a] leading-relaxed">
        Hey! Could you please review a document for me?
      </p>
      <p className="text-[11px] text-[#9aa2be] mt-1.5">MAT-2233 · 2 h ago</p>
    </motion.div>
  );
}