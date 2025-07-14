export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Spinning loader */}
          <div className="w-16 h-16 border-4 border-gray-600 border-t-[#f8650c] rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Vendmat logo/icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#f8650c] rounded-sm opacity-80"></div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-400 text-sm">Preparing fresh content for you</p>
      </div>
    </div>
  );
}