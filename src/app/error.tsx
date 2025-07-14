'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl text-[#f8650c] mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-300 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={reset}
            className="w-full bg-[#f8650c] hover:bg-orange-600 text-white"
          >
            Try Again
          </Button>
          
          <Button
            href="/"
            variant="outline"
            className="w-full border-white text-white hover:bg-white hover:text-gray-900"
          >
            Go Home
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>If the problem persists, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}