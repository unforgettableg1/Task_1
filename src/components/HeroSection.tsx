"use client";

import { motion } from "framer-motion";
import { CreditCard, Briefcase, CheckSquare, FileText, ArrowRight } from "lucide-react";
import { FloatingCard } from "./FloatingCard";
import { PortalCard } from "./PortalCard";

export function HeroSection() {
  return (
    <section
      style={{
        background: "#eef1f8",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Background blobs */}
      {[
        { top: "6px", left: "-30px", width: "180px", height: "88px", rotate: "-12deg" },
        { top: "30px", right: "20px", width: "140px", height: "70px", rotate: "8deg" },
        { bottom: "40px", right: "160px", width: "120px", height: "60px", rotate: "-6deg" },
        { bottom: "10px", left: "20px", width: "160px", height: "78px", rotate: "4deg" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            background: "#c9d5ef",
            opacity: 0.55,
            borderRadius: "999px",
            ...s,
            transform: `rotate(${s.rotate})`,
          }}
        />
      ))}

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 48px",
          display: "flex",
          alignItems: "center",
          gap: "48px",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left: Text */}
        <motion.div
          style={{ flex: "0 0 44%", maxWidth: "44%" }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "#4a5068",
              lineHeight: 1.2,
              marginBottom: "18px",
              fontFamily: "inherit",
            }}
          >
            A single platform to{" "}
            <strong style={{ fontWeight: 800, color: "#2d3348" }}>manage</strong>{" "}
            every part of your{" "}
            <strong style={{ fontWeight: 800, color: "#2d3348" }}>legal work</strong>
          </h1>
          <p
            style={{
              color: "#7a849e",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              maxWidth: "300px",
              marginBottom: "32px",
              fontFamily: "inherit",
            }}
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>
          <motion.button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#4f5bd5",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "13px 26px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            whileHover={{ y: -2, background: "#3d49c2" } as any}
            whileTap={{ scale: 0.97 }}
          >
            Get started
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* Right: Floating cards */}
        <motion.div
          style={{ flex: 1, position: "relative", height: "400px" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ position: "absolute", top: "16px", left: "100px" }}>
            <FloatingCard color="blue" rotation={-6} icon={<CreditCard size={18} />} label="Billing" delay={0.1} bobDuration={4.2} />
          </div>

          <div style={{ position: "absolute", top: "140px", left: "0px" }}>
            <FloatingCard color="orange" rotation={6} icon={<Briefcase size={18} />} label="Matters" delay={0.25} bobDuration={3.8} />
          </div>

          <div style={{ position: "absolute", top: "140px", right: "0px" }}>
            <PortalCard />
          </div>

          <div style={{ position: "absolute", bottom: "30px", left: "60px" }}>
            <FloatingCard color="dark" rotation={-4} icon={<CheckSquare size={18} />} label="Tasks" delay={0.4} bobDuration={4.5} />
          </div>

          <div style={{ position: "absolute", bottom: "30px", right: "0px" }}>
            <FloatingCard
              color="dark"
              rotation={7}
              icon={<FileText size={18} style={{ color: "#d47b2e" }} />}
              label="Documents"
              delay={0.15}
              bobDuration={3.6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}