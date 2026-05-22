// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// type CardColor = "blue" | "orange" | "dark";

// interface FloatingCardProps {
//   color: CardColor;
//   rotation: number;
//   icon: ReactNode;
//   label: string;
//   delay?: number;
//   bobDuration?: number;
//   className?: string;
// }

// const colorMap: Record<CardColor, string> = {
//   blue: "bg-brand-blue text-white",
//   orange: "bg-brand-orange text-white",
//   dark: "bg-brand-dark text-white",
// };

// const iconBgMap: Record<CardColor, string> = {
//   blue: "bg-white/20",
//   orange: "bg-white/20",
//   dark: "bg-white/15",
// };

// export function FloatingCard({
//   color,
//   rotation,
//   icon,
//   label,
//   delay = 0,
//   bobDuration = 4,
//   className = "",
// }: FloatingCardProps) {
//   return (
//     <motion.div
//       className={`
//         flex items-center gap-3 px-5 py-3.5 rounded-full
//         font-bold text-lg shadow-xl cursor-default
//         ${colorMap[color]} ${className}
//       `}
//       style={{ rotate: rotation }}
//       initial={{ opacity: 0, y: 24, scale: 0.92 }}
//       animate={{
//         opacity: 1,
//         y: [0, -10, 0],
//         scale: 1,
//       }}
//       transition={{
//         opacity: { delay, duration: 0.5 },
//         scale: { delay, duration: 0.5 },
//         y: {
//           delay: delay + 0.5,
//           duration: bobDuration,
//           repeat: Infinity,
//           ease: "easeInOut",
//         },
//       }}
//       whileHover={{
//         scale: 1.06,
//         boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
//         transition: { duration: 0.2 },
//       }}
//     >
//       <div
//         className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgMap[color]}`}
//       >
//         {icon}
//       </div>
//       <span>{label}</span>
//     </motion.div>
//   );
// }



// ****************************************************************
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardColor = "blue" | "orange" | "dark";

interface FloatingCardProps {
  color: CardColor;
  rotation: number;
  icon: ReactNode;
  label: string;
  delay?: number;
  bobDuration?: number;
  className?: string;
}

const colorMap: Record<CardColor, { bg: string; iconBg: string }> = {
  blue:   { bg: "#4f5bd5", iconBg: "rgba(255,255,255,0.22)" },
  orange: { bg: "#d47b2e", iconBg: "rgba(255,255,255,0.22)" },
  dark:   { bg: "#2d3348", iconBg: "rgba(255,255,255,0.15)" },
};

export function FloatingCard({
  color,
  rotation,
  icon,
  label,
  delay = 0,
  bobDuration = 4,
  className = "",
}: FloatingCardProps) {
  const { bg, iconBg } = colorMap[color];

  return (
    <motion.div
      style={{
        rotate: rotation,
        background: bg,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 22px",
        borderRadius: "999px",
        color: "#fff",
        fontWeight: 700,
        fontSize: "1.05rem",
        whiteSpace: "nowrap",
        boxShadow: "0 8px 28px rgba(0,0,0,0.13)",
        cursor: "default",
        fontFamily: "inherit",
      }}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        scale: 1,
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: {
          delay: delay + 0.5,
          duration: bobDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span>{label}</span>
    </motion.div>
  );
}