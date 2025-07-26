import { NextRequest, NextResponse } from 'next/server';
import ContentScraper from '@/lib/services/contentScraper';

export async function GET(request: NextRequest) {
  try {
    const scraper = new ContentScraper();
    const content = await scraper.fetchAllContent();

    return NextResponse.json({
      success: true,
      data: content,
      count: content.length,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Content API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch content',
        data: []
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const scraper = new ContentScraper();
    const result = await scraper.refreshContent();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `Successfully refreshed ${result.count} posts`,
        count: result.count
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.error || 'Failed to refresh content'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Content refresh error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to refresh content'
      },
      { status: 500 }
    );
  }
} 