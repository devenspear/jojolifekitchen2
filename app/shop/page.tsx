"use client";

import ProductCard from "@/components/cards/ProductCard";
import { sampleProducts } from "@/lib/data";
import { motion } from "framer-motion";

export default function ShopPage() {
  const featuredProducts = sampleProducts.filter(product => product.featured);
  const regularProducts = sampleProducts.filter(product => !product.featured);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-width-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Shop the Kitchen
          </h1>
          <p className="text-lg text-warmGray max-w-2xl mx-auto">
            Nancy Jo&apos;s favorite kitchen finds, handmade gifts, and cozy home moments—all crafted with love.
          </p>
        </motion.div>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-charcoal mb-8 text-center">
              Featured Favorites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* All Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {featuredProducts.length > 0 && (
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-charcoal mb-8 text-center">
              More Kitchen Treasures
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                index={featuredProducts.length + index} 
              />
            ))}
          </div>
        </motion.div>

        {/* Etsy Shop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 p-8 bg-cream rounded-lg"
        >
          <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
            Want to see more?
          </h3>
          <p className="text-warmGray mb-6">
            Visit my full Etsy shop for exclusive items and seasonal collections
          </p>
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Visit JoJo&apos;s Life Kitchen on Etsy
          </a>
        </motion.div>
      </div>
    </div>
  );
} 