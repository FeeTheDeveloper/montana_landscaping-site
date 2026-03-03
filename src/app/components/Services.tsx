"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Lawn Maintenance",
    description:
      "Routine mowing, edging, trimming, and seasonal clean-ups to keep your property looking sharp year-round.",
    icon: "🌿",
  },
  {
    title: "Landscape Design",
    description:
      "Custom landscape plans tailored to Texas climates — drought-tolerant, beautiful, and built to last.",
    icon: "🎨",
  },
  {
    title: "Mulch / Rock",
    description:
      "Premium mulch and decorative rock installations for garden beds, pathways, and erosion control.",
    icon: "🪨",
  },
  {
    title: "Sod Installation",
    description:
      "Fresh, professional sod installation for instant curb appeal — graded, laid, and rolled to perfection.",
    icon: "🌱",
  },
  {
    title: "Hardscaping",
    description:
      "Patios, retaining walls, walkways, and fire pits — engineered with precision and built to endure.",
    icon: "🧱",
  },
  {
    title: "Irrigation / Drainage",
    description:
      "Sprinkler system installs, repairs, and drainage solutions to protect your investment from water damage.",
    icon: "💧",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section className="bg-brand-black px-6 py-24" id="services">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-light sm:text-4xl md:text-5xl">
            Our <span className="text-brand-gold">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-light/60">
            From routine maintenance to full-scale landscape transformations — we
            handle it all with veteran-grade discipline.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl border border-brand-light/10 bg-brand-charcoal p-8 transition-colors duration-300 hover:border-brand-gold/30"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/0 transition-all duration-500 group-hover:from-brand-gold/5 group-hover:to-transparent" />

              <div className="relative z-10">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-brand-light">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-light/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
