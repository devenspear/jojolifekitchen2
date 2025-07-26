"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  productUrl: string;
  featured?: boolean;
  index?: number;
}

const ProductCard = ({
  name,
  imageUrl,
  price,
  description,
  productUrl,
  featured,
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden card-hover"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 left-2 z-10 bg-tomato text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Star size={14} className="fill-white" />
          <span>Featured</span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square bg-warmGray/10">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 line-clamp-1">
          {name}
        </h3>
        
        <p className="text-warmGray text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-tomato">{price}</span>
        </div>

        {/* CTA Button */}
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2 px-4 w-full text-center flex items-center justify-center gap-2"
        >
          <span>Buy on Etsy</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard; 