"use client";

import { useState } from "react";
import { RefreshCw, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

export default function AdminPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);
  const [refreshResult, setRefreshResult] = useState<{
    success: boolean;
    message: string;
    count?: number;
  } | null>(null);

  const handleRefreshContent = async () => {
    setIsRefreshing(true);
    setRefreshResult(null);

    try {
      const response = await fetch('/api/content', {
        method: 'POST',
      });

      const result = await response.json();
      
      setRefreshResult({
        success: result.success,
        message: result.success 
          ? `Successfully refreshed ${result.count} posts` 
          : result.error || 'Failed to refresh content',
        count: result.count
      });

      if (result.success) {
        setLastRefresh(new Date().toLocaleString());
      }
    } catch (error) {
      setRefreshResult({
        success: false,
        message: 'Network error: Could not connect to API'
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-width-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold text-charcoal mb-4">
              Content Management
            </h1>
            <p className="text-lg text-warmGray">
              Manage social media content for Jo Joe&apos;s Life Kitchen
            </p>
          </div>

          {/* Main Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Content Refresh */}
            <div className="bg-cream p-6 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                Refresh Content
              </h2>
              <p className="text-warmGray mb-6">
                Fetch the latest posts from TikTok and Instagram accounts.
              </p>
              
              <button
                onClick={handleRefreshContent}
                disabled={isRefreshing}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <RefreshCw 
                  size={20} 
                  className={isRefreshing ? 'animate-spin' : ''} 
                />
                {isRefreshing ? 'Refreshing...' : 'Refresh Content'}
              </button>

              {/* Refresh Result */}
              {refreshResult && (
                <div className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                  refreshResult.success 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  {refreshResult.success ? (
                    <CheckCircle size={20} className="text-green-600 mt-0.5" />
                  ) : (
                    <AlertCircle size={20} className="text-red-600 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium ${
                      refreshResult.success ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {refreshResult.success ? 'Success!' : 'Error'}
                    </p>
                    <p className={`text-sm ${
                      refreshResult.success ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {refreshResult.message}
                    </p>
                  </div>
                </div>
              )}

              {lastRefresh && (
                <p className="text-sm text-warmGray mt-4">
                  Last refreshed: {lastRefresh}
                </p>
              )}
            </div>

            {/* Social Media Links */}
            <div className="bg-cream p-6 rounded-lg">
              <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                Social Media Accounts
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">TikTok</h3>
                  <a
                    href="https://www.tiktok.com/@jojoeslifekitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tomato hover:underline flex items-center gap-2"
                  >
                    @jojoeslifekitchen
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/jojoeslifekitchen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tomato hover:underline flex items-center gap-2"
                  >
                    @jojoeslifekitchen
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* API Setup Instructions */}
          <div className="bg-warmGray/10 p-6 rounded-lg">
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
              API Setup Required
            </h2>
            <div className="prose prose-sm text-charcoal/80">
              <p className="mb-4">
                To fetch real content from social media platforms, you need to configure API credentials:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-charcoal">Instagram API:</h3>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-2">
                    <li>Go to <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-tomato hover:underline">Facebook Developers</a></li>
                    <li>Create a new app and enable Instagram Basic Display</li>
                    <li>Get your Access Token and User ID</li>
                    <li>Add them to your <code className="bg-warmGray/20 px-1 rounded">.env.local</code> file</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-charcoal">TikTok Content:</h3>
                  <p className="text-sm mt-2">
                    TikTok doesn&apos;t have a public API. Currently using sample data. 
                    Consider manual content curation or third-party services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 