"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder - you can add actual video later */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream/90 to-tomato/20" />
      
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222222' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Static Logo with Subtle Animated Glow and Floating Elements */}
          <div className="relative mx-auto mb-8 w-64 h-64">
            <Image
              src="/logo.png"
              alt="Jo Joe's Life Kitchen Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            
            {/* Subtle Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,106,90,0.2) 0%, rgba(255,106,90,0) 70%)"
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Creative Subtle Floating Sparkles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-tomato rounded-full opacity-40"
                style={{
                  top: `${20 + Math.sin(i * Math.PI / 2) * 60}%`,
                  left: `${20 + Math.cos(i * Math.PI / 2) * 60}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
            
            {/* Gentle Hover Interaction */}
            <motion.div
              className="absolute inset-0"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-charcoal/80 mb-4 font-lato"
          >
            Cook with joy and discover seasonal vibes
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-warmGray mb-8 font-lato"
          >
            Joyful, practical meals from Nancy Jo Spear in Wilmington, NC
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 1.5, repeat: Infinity, delay: 1.5 }
          }}
        >
          <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-charcoal/30 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 