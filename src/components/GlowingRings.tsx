"use client";

import React from 'react';

const GlowingRings: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Ring 1 - Outermost Purple Oval */}
      <div className="absolute animate-[crissCross1_25s_linear_infinite]">
        <div className="w-[600px] h-[400px] md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[500px] border-2 border-purple-500/30 rounded-full transform scale-x-150 scale-y-75 opacity-60">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-purple-400/15 to-transparent animate-[drift_15s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      {/* Ring 2 - Pink Oval (Different orientation) */}
      <div className="absolute animate-[crissCross2_20s_linear_infinite]">
        <div className="w-[500px] h-[350px] md:w-[580px] md:h-[380px] lg:w-[650px] lg:h-[420px] border-2 border-pink-500/40 rounded-full transform scale-x-120 scale-y-80 rotate-45 opacity-70">
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-pink-500/15 via-pink-400/20 to-transparent animate-[drift_12s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>
      
      {/* Ring 3 - Red Oval (Vertical orientation) */}
      <div className="absolute animate-[crissCross3_18s_linear_infinite]">
        <div className="w-[400px] h-[300px] md:w-[460px] md:h-[340px] lg:w-[520px] lg:h-[380px] border-2 border-red-500/50 rounded-full transform scale-x-90 scale-y-130 rotate-90 opacity-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-red-500/20 via-red-400/25 to-transparent animate-[drift_10s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      {/* Ring 4 - Orange Oval (Diagonal) */}
      <div className="absolute animate-[crissCross4_15s_linear_infinite]">
        <div className="w-[320px] h-[240px] md:w-[360px] md:h-[270px] lg:w-[400px] lg:h-[300px] border-2 border-orange-500/60 rounded-full transform scale-x-110 scale-y-85 rotate-135 opacity-90">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/25 via-orange-400/30 to-transparent animate-[drift_8s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>
      
      {/* Ring 5 - Gold/Yellow Oval (Innermost) */}
      <div className="absolute animate-[crissCross5_12s_linear_infinite]">
        <div className="w-[240px] h-[180px] md:w-[280px] md:h-[210px] lg:w-[320px] lg:h-[240px] border-2 border-yellow-500/70 rounded-full transform scale-x-95 scale-y-115 rotate-30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/30 via-yellow-400/35 to-transparent animate-[drift_6s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      {/* Central core glow */}
      <div className="absolute w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-radial from-[#f8650c]/60 via-orange-400/40 to-transparent animate-[pulse_2s_ease-in-out_infinite] blur-sm"></div>
      
      {/* Additional floating particles */}
      <div className="absolute w-3 h-3 bg-yellow-400/60 rounded-full animate-[orbit1_20s_linear_infinite] blur-sm"></div>
      <div className="absolute w-2 h-2 bg-orange-400/50 rounded-full animate-[orbit2_25s_linear_infinite] blur-sm"></div>
      <div className="absolute w-4 h-4 bg-red-400/40 rounded-full animate-[orbit3_30s_linear_infinite] blur-sm"></div>
    </div>
  );
};

export default GlowingRings;