import Hero from "@/components/ui/Hero";
import VideoCard from "@/components/cards/VideoCard";
import { sampleVideos, type Video } from "@/lib/data";
import Link from "next/link";

async function getLatestContent() {
  try {
    // Try to fetch real content from API
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/content`, {
      cache: 'no-store', // Always fetch fresh content
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.data.length > 0) {
        return data.data.slice(0, 6); // Get latest 6 posts
      }
    }
  } catch (error) {
    console.log('Failed to fetch real content, using sample data');
  }
  
  // Fallback to sample data
  return sampleVideos.slice(0, 6);
}

export default async function Home() {
  const featuredVideos = await getLatestContent();

  return (
    <>
      <Hero />

      {/* Featured Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-width-container section-padding">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Latest from the Kitchen
            </h2>
            <p className="text-lg text-warmGray max-w-2xl mx-auto">
              Fresh recipes, seasonal vibes, and joyful cooking moments from my kitchen to yours
            </p>
            <div className="mt-4 text-sm text-warmGray">
              Follow me on {" "}
              <a 
                href="https://www.tiktok.com/@jojoeslifekitchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tomato hover:underline"
              >
                TikTok
              </a>
              {" "} and {" "}
              <a 
                href="https://www.instagram.com/jojoeslifekitchen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tomato hover:underline"
              >
                Instagram
              </a>
              {" "} @jojoeslifekitchen
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVideos.map((video: Video, index: number) => (
              <VideoCard key={video.id} {...video} index={index} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link href="/catalog" className="btn-primary inline-block">
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter/Shop CTA Section */}
      <section className="py-20 bg-cream">
        <div className="max-width-container section-padding text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Bring the Joy Home
          </h2>
          <p className="text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Discover handpicked kitchen treasures and cozy home goods in my Etsy shop
          </p>
          <Link href="/shop" className="btn-secondary inline-block">
            Visit the Shop
          </Link>
        </div>
      </section>
    </>
  );
}
