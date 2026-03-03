"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AuthoritySection from "./components/AuthoritySection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Splash overlay — plays once per refresh */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <SplashScreen onComplete={() => setShowSplash(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main page content — rendered underneath, revealed after splash */}
      <main>
        <Hero />
        <Services />
        <AuthoritySection />
      </main>
    </>
  );
}
