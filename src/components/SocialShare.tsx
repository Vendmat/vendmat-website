'use client';

import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${description}`)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    // LinkedIn's simple share URL (basic functionality)
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${title}\n\n${description}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex gap-4">
      <button 
        onClick={shareOnTwitter}
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
      >
        Share on Twitter
      </button>
      <button 
        onClick={shareOnLinkedIn}
        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
      >
        Share on LinkedIn
      </button>
      <button 
        onClick={copyToClipboard}
        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
      >
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}