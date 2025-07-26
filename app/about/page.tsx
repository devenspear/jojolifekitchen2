"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, MapPin, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-width-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Meet Nancy Jo Spear
          </h1>
          <div className="flex items-center justify-center gap-2 text-warmGray">
            <MapPin size={18} />
            <span>Wilmington, NC</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[4/5] bg-warmGray/10 rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop"
              alt="Nancy Jo Spear"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-3xl font-bold text-charcoal">
              Hi, I&apos;m Nancy Jo Spear
            </h2>
            
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I&apos;m the voice behind Jo Joe&apos;s Life Kitchen—cooking up 
              joyful, practical meals and seasonal vibes from Wilmington, NC.
            </p>

            <p className="text-charcoal/80 leading-relaxed">
              What started as a way to share simple, joy-filled recipes with friends has 
              grown into a community of food lovers who believe that cooking should be fun, 
              accessible, and never too serious. My stutter? It&apos;s part of who I am, 
              and it reminds me (and hopefully you!) that perfection isn&apos;t the goal—joy is.
            </p>

            <p className="text-charcoal/80 leading-relaxed">
              Whether I&apos;m sharing a 5-minute Trader Joe&apos;s hack, decorating for 
              the holidays on a budget, or whipping up comfort food that feeds the soul, 
              my mission is simple: to help you find more joy in your kitchen and your life.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-tomato">
                <Heart size={20} className="fill-current" />
                <span className="font-medium">Mood Food Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-tomato">
                <Coffee size={20} />
                <span className="font-medium">Coffee Lover</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-cream rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-8">
            What I Believe In
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🥘</div>
              <h4 className="font-semibold text-lg text-charcoal mb-2">Simple is Beautiful</h4>
              <p className="text-warmGray">
                Great food doesn&apos;t need to be complicated. The best meals often come 
                from the simplest ingredients.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">💕</div>
              <h4 className="font-semibold text-lg text-charcoal mb-2">Cook with Love</h4>
              <p className="text-warmGray">
                Food tastes better when it&apos;s made with love and shared with people 
                who matter.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-semibold text-lg text-charcoal mb-2">Find Your Joy</h4>
              <p className="text-warmGray">
                Whether it&apos;s a perfect latte or a cozy soup, find what brings you 
                joy and savor it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
            Let&apos;s Cook Together!
          </h3>
          <p className="text-warmGray mb-8">
            Follow along for daily recipes, kitchen tips, and joyful moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog" className="btn-primary">
              Browse My Videos
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 