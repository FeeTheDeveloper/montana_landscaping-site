"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-brand-charcoal to-brand-black px-6 py-24">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(207,162,61,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(207,162,61,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-4xl font-extrabold leading-tight tracking-tight text-brand-light sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Texas-Built Landscapes.{" "}
          <span className="text-brand-gold">Veteran-Led Precision.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-light/70 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Disciplined landscaping solutions built to withstand Texas conditions.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#estimate"
            className="inline-flex h-14 items-center justify-center rounded-lg bg-brand-gold px-8 text-base font-semibold text-brand-black transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(207,162,61,0.4)]"
          >
            Get a Free Estimate
          </a>
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-brand-gold px-8 text-base font-semibold text-brand-gold transition-all duration-200 hover:bg-brand-gold/10"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
