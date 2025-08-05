"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BallPitWorking from "./BallPitWorking";

const Hero = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Ball Pit Background */}
      <div className="absolute inset-0">
        <BallPitWorking 
          className="w-full h-full opacity-70"
          count={100}
          gravity={0.2}
          friction={0.98}
          wallBounce={0.7}
          followCursor={true}
        />
      </div>
      
      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Simple Logo - No treatments */}
          <div className="relative mx-auto mb-6 w-48 h-48">
            <Image
              src="/logo.png"
              alt="Jo Joe's Life Kitchen Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-charcoal/90 mb-3 font-lato"
          >
            Cook with joy and discover seasonal vibes
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base text-warmGray mb-6 font-lato"
          >
            Joyful, practical meals from Nancy Jo Spear in Wilmington, NC
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/catalog" className="btn-primary">
                Browse Recipes
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/shop" className="btn-secondary">
                Visit Shop
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 