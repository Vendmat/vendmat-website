import Button from '@/components/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          {/* 404 styled like a vending machine display */}
          <div className="bg-gray-800 border-4 border-gray-600 rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div className="text-[#f8650c] text-6xl font-bold mb-4 font-mono">404</div>
            <div className="text-gray-300 text-sm uppercase tracking-wider">Page Not Found</div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Oops! This page is out of stock
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            The page you're looking for might have been moved, deleted, or doesn't exist. 
            Don't worry - our fresh content is always being restocked!
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            href="/"
            className="w-full sm:w-auto bg-[#f8650c] hover:bg-orange-600 text-white px-8 py-3"
          >
            🏠 Go Home
          </Button>
          
          <Button
            href="/menu"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
          >
            🍽️ View Menu
          </Button>
          
          <Button
            href="/locations"
            variant="outline"
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
          >
            📍 Find Locations
          </Button>
        </div>
        
        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            Need help? <Link href="/contact" className="text-[#f8650c] hover:text-orange-400 underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
}