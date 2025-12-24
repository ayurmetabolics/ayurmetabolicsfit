'use client';

import { useEffect } from 'react';

interface GoogleAdsProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}

export default function GoogleAds({ adSlot, adFormat = 'auto', style }: GoogleAdsProps) {
  const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID || 'ca-pub-YOUR_PUBLISHER_ID';

  useEffect(() => {
    try {
      // Load Google AdSense script
      if (typeof window !== 'undefined' && (window as any).adsbygoogle === undefined) {
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }

      // Initialize ad
      if ((window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading Google Ads:', error);
    }
  }, [publisherId]);

  // Don't render if publisher ID is not configured
  if (publisherId === 'ca-pub-YOUR_PUBLISHER_ID') {
    return (
      <div className="my-8 p-4 bg-gray-100 rounded text-center text-sm text-gray-500">
        Google Ads placeholder (configure NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID to enable)
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style,
        }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

