// Sample data - will be replaced with database/API calls later

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  platform: "TikTok" | "Instagram";
  datePosted: string;
  views?: number;
  likes?: number;
  tags?: string[];
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  productUrl: string;
  featured?: boolean;
}

export const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Fall Tailgate Snack Idea! 🏈 Trader Joe's Sweet Potato Bites",
    thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=600&fit=crop",
    videoUrl: "https://www.tiktok.com/@example",
    platform: "TikTok",
    datePosted: "2024-10-03",
    views: 15234,
    likes: 2341,
    tags: ["Fall Snacks", "Trader Joe's", "Game Day"]
  },
  {
    id: "2",
    title: "Cozy Soup Season: Butternut Squash Magic ✨",
    thumbnail: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=600&fit=crop",
    videoUrl: "https://www.instagram.com/reel/example",
    platform: "Instagram",
    datePosted: "2024-10-01",
    views: 8932,
    likes: 1203,
    tags: ["Mood Food", "Fall", "Soup Season"]
  },
  {
    id: "3",
    title: "DIY Holiday Decor on a Budget 🎄",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=600&fit=crop",
    videoUrl: "https://www.tiktok.com/@example2",
    platform: "TikTok",
    datePosted: "2024-09-28",
    views: 23451,
    likes: 4567,
    tags: ["Holiday", "DIY", "Decor"]
  },
  {
    id: "4",
    title: "5-Minute Meal Prep for Busy Moms",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop",
    videoUrl: "https://www.instagram.com/reel/example2",
    platform: "Instagram",
    datePosted: "2024-09-25",
    views: 12043,
    likes: 2890,
    tags: ["Quick Meals", "Meal Prep", "Family"]
  },
  {
    id: "5",
    title: "Trader Joe's Haul: October Edition 🍂",
    thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=600&fit=crop",
    videoUrl: "https://www.tiktok.com/@example3",
    platform: "TikTok",
    datePosted: "2024-09-20",
    views: 34567,
    likes: 5678,
    tags: ["Trader Joe's", "Haul", "October"]
  },
  {
    id: "6",
    title: "Feel-Good Mac & Cheese Upgrade",
    thumbnail: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=400&h=600&fit=crop",
    videoUrl: "https://www.instagram.com/reel/example3",
    platform: "Instagram",
    datePosted: "2024-09-18",
    views: 19234,
    likes: 3456,
    tags: ["Comfort Food", "Recipes", "Cheese"]
  }
];

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Handmade Ceramic Serving Bowl",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    price: "$45.00",
    description: "Beautiful handcrafted ceramic bowl perfect for serving your favorite dishes",
    productUrl: "https://www.etsy.com/listing/example1",
    featured: true
  },
  {
    id: "2",
    name: "Kitchen Wall Art Print Set",
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop",
    price: "$28.00",
    description: "Set of 3 kitchen-themed art prints to brighten your cooking space",
    productUrl: "https://www.etsy.com/listing/example2",
    featured: true
  },
  {
    id: "3",
    name: "Wooden Recipe Card Holder",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: "$18.50",
    description: "Rustic wooden stand for displaying your favorite recipe cards",
    productUrl: "https://www.etsy.com/listing/example3",
    featured: false
  },
  {
    id: "4",
    name: "Embroidered Kitchen Towel Set",
    imageUrl: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop",
    price: "$32.00",
    description: "Set of 4 beautifully embroidered kitchen towels with seasonal designs",
    productUrl: "https://www.etsy.com/listing/example4",
    featured: true
  }
]; 