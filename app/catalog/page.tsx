"use client";

import { useState, useMemo } from "react";
import VideoCard from "@/components/cards/VideoCard";
import { sampleVideos } from "@/lib/data";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    sampleVideos.forEach(video => {
      video.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and sort videos
  const filteredVideos = useMemo(() => {
    let filtered = sampleVideos;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Platform filter
    if (selectedPlatform !== "all") {
      filtered = filtered.filter(video => video.platform === selectedPlatform);
    }

    // Tag filter
    if (selectedTag !== "all") {
      filtered = filtered.filter(video => video.tags?.includes(selectedTag));
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "oldest":
        sorted.sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime());
        break;
      case "popular":
        sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case "newest":
      default:
        sorted.sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime());
    }

    return sorted;
  }, [searchQuery, selectedPlatform, selectedTag, sortBy]);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-width-container section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4"
          >
            Video Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-warmGray"
          >
            Browse all recipes, tips, and kitchen adventures
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warmGray" size={20} />
            <input
              type="text"
              placeholder="Search by dish, vibe, or season..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-warmGray/30 focus:outline-none focus:border-tomato transition-colors"
            />
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Platform Filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-warmGray" />
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="px-4 py-2 rounded-lg border border-warmGray/30 focus:outline-none focus:border-tomato transition-colors"
              >
                <option value="all">All Platforms</option>
                <option value="TikTok">TikTok</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>

            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 rounded-lg border border-warmGray/30 focus:outline-none focus:border-tomato transition-colors"
            >
              <option value="all">All Categories</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-warmGray/30 focus:outline-none focus:border-tomato transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="text-center mb-8 text-warmGray">
          {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <VideoCard key={video.id} {...video} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-warmGray">No videos found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedPlatform("all");
                setSelectedTag("all");
              }}
              className="mt-4 text-tomato hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 