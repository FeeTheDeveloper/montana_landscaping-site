"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthoritySection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden" id="how-we-work">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/logo2.png"
          alt="Montana Landscaping team at work"
          fill
          className="object-cover md:fixed md:object-center"
          style={{
            /* Parallax-like effect on desktop via CSS background attachment
               The fixed class on md+ gives a subtle parallax scroll feel */
          }}
          sizes="100vw"
        />
        {/* Dark overlay - 60% black */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 py-24">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-light sm:text-4xl md:text-5xl">
            How We <span className="text-brand-gold">Work</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-light/80">
            Veteran discipline meets professional landscaping execution.
            Structured planning. Reliable scheduling. Precision results.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#estimate"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-brand-red px-8 text-base font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(177,18,38,0.4)]"
            >
              Request a Free Estimate
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
