// Content scraping service for Jo Joe's Life Kitchen social media
// Integrates with TikTok and Instagram APIs to fetch real content

interface SocialMediaPost {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  platform: "TikTok" | "Instagram";
  datePosted: string;
  views?: number;
  likes?: number;
  tags?: string[];
  description?: string;
}

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  thumbnail_url?: string;
  caption: string;
  timestamp: string;
  permalink: string;
  like_count?: number;
}

interface TikTokPost {
  id: string;
  desc: string;
  createTime: number;
  video: {
    playAddr: string;
    cover: string;
  };
  stats: {
    playCount: number;
    likeCount: number;
  };
}

class ContentScraper {
  private instagramAccessToken: string;
  private instagramUserId: string;

  constructor() {
    this.instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN || '';
    this.instagramUserId = process.env.INSTAGRAM_USER_ID || '';
  }

  // Instagram Content Fetching using Instagram Basic Display API
  async fetchInstagramContent(): Promise<SocialMediaPost[]> {
    if (!this.instagramAccessToken || !this.instagramUserId) {
      console.warn('Instagram API credentials not configured');
      return [];
    }

    try {
      const response = await fetch(
        `https://graph.instagram.com/${this.instagramUserId}/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp,permalink,like_count&access_token=${this.instagramAccessToken}`
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();
      const posts: SocialMediaPost[] = data.data
        .filter((post: InstagramPost) => post.media_type === 'VIDEO')
        .map((post: InstagramPost) => ({
          id: post.id,
          title: this.extractTitle(post.caption || ''),
          thumbnail: post.thumbnail_url || post.media_url,
          videoUrl: post.permalink,
          platform: 'Instagram' as const,
          datePosted: post.timestamp.split('T')[0],
          likes: post.like_count,
          tags: this.extractTags(post.caption || ''),
          description: post.caption,
        }));

      return posts;
    } catch (error) {
      console.error('Error fetching Instagram content:', error);
      return [];
    }
  }

  // TikTok Content Fetching (Note: TikTok has no official public API)
  // This would require unofficial APIs or web scraping solutions
  async fetchTikTokContent(): Promise<SocialMediaPost[]> {
    // TikTok scraping is complex due to:
    // 1. No official public API
    // 2. Heavy bot detection
    // 3. Terms of service restrictions
    
    // Options for implementation:
    // 1. Use unofficial TikTok API libraries (risk of breaking)
    // 2. Use browser automation with Playwright/Puppeteer
    // 3. Use third-party services like RapidAPI TikTok scrapers
    // 4. Manual content curation through admin panel

    console.warn('TikTok content fetching requires additional setup');
    
    // For now, return sample TikTok-style data
    // In production, this would be replaced with actual scraping logic
    return this.getSampleTikTokContent();
  }

  // Extract title from caption (first line or sentence)
  private extractTitle(caption: string): string {
    if (!caption) return 'Untitled Video';
    
    const firstLine = caption.split('\n')[0];
    const firstSentence = firstLine.split('.')[0];
    
    return firstSentence.length > 0 ? firstSentence : 'Untitled Video';
  }

  // Extract hashtags as tags
  private extractTags(caption: string): string[] {
    if (!caption) return [];
    
    const hashtags = caption.match(/#[\w]+/g) || [];
    return hashtags.map(tag => tag.substring(1)).slice(0, 5); // Remove # and limit to 5 tags
  }

  // Sample TikTok content for development
  private getSampleTikTokContent(): SocialMediaPost[] {
    return [
      {
        id: 'tiktok_1',
        title: 'Quick Trader Joe\'s Haul! 🛒',
        thumbnail: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=600&fit=crop',
        videoUrl: 'https://www.tiktok.com/@jojoeslifekitchen',
        platform: 'TikTok',
        datePosted: new Date().toISOString().split('T')[0],
        views: 25000,
        likes: 3200,
        tags: ['TraderJoes', 'Haul', 'FoodFinds'],
        description: 'Latest finds from Trader Joe\'s! #traderjoes #haul #foodfinds'
      },
      {
        id: 'tiktok_2',
        title: 'Cozy Fall Recipe ✨',
        thumbnail: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=600&fit=crop',
        videoUrl: 'https://www.tiktok.com/@jojoeslifekitchen',
        platform: 'TikTok',
        datePosted: new Date(Date.now() - 86400000).toISOString().split('T')[0],
        views: 18500,
        likes: 2800,
        tags: ['Fall', 'Recipe', 'Cozy'],
        description: 'Perfect fall comfort food recipe! #fall #recipe #cozy'
      }
    ];
  }

  // Fetch all content from both platforms
  async fetchAllContent(): Promise<SocialMediaPost[]> {
    const [instagramPosts, tiktokPosts] = await Promise.all([
      this.fetchInstagramContent(),
      this.fetchTikTokContent()
    ]);

    const allPosts = [...instagramPosts, ...tiktokPosts];
    
    // Sort by date (newest first)
    return allPosts.sort((a, b) => 
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
    );
  }

  // Refresh content and cache results
  async refreshContent(): Promise<{ success: boolean; count: number; error?: string }> {
    try {
      const content = await this.fetchAllContent();
      
      // Here you would typically save to database
      // For now, we'll just return the count
      
      return {
        success: true,
        count: content.length
      };
    } catch (error) {
      return {
        success: false,
        count: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export default ContentScraper;
export type { SocialMediaPost }; 