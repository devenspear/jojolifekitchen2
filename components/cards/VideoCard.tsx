"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Eye, Heart, Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  platform: "TikTok" | "Instagram";
  datePosted: string;
  views?: number;
  likes?: number;
  tags?: string[];
  index?: number;
}

const VideoCard = ({
  title,
  thumbnail,
  videoUrl,
  platform,
  datePosted,
  views,
  likes,
  tags,
  index = 0,
}: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const platformIcon = platform === "TikTok" ? "🎵" : "📸";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Preview / Thumbnail */}
      <div className="relative aspect-[9/16] bg-warmGray/10">
        {isHovered ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play size={48} className="text-white fill-white" />
        </div>

        {/* Platform Badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm flex items-center gap-1">
          <span>{platformIcon}</span>
          <span>{platform}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-playfair text-lg font-semibold text-charcoal line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-warmGray mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(datePosted).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {views && (
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {views.toLocaleString()}
            </span>
          )}
          {likes && (
            <span className="flex items-center gap-1">
              <Heart size={14} />
              {likes.toLocaleString()}
            </span>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-cream px-2 py-1 rounded-full text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm py-2 px-4 w-full text-center block"
        >
          Watch Full Reel
        </a>
      </div>
    </motion.div>
  );
};

export default VideoCard; 