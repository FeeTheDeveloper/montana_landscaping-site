"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            // After the scale-in finishes, wait a beat then signal done
            setTimeout(onComplete, 400);
          }}
          className="relative"
        >
          {/* Gold glow effect behind the logo */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.3] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(207,162,61,0.35) 0%, rgba(207,162,61,0) 70%)",
              transform: "scale(1.8)",
            }}
          />
          <Image
            src="/logo.png"
            alt="Montana Landscaping"
            width={280}
            height={280}
            priority
            className="relative z-10 drop-shadow-[0_0_40px_rgba(207,162,61,0.4)]"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
