'use client';

import { motion } from 'framer-motion';

export default function AnimatedGraphic() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
        {/* Glowing Background Core */}
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          fill="url(#coreGradient)"
          filter="blur(15px)"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner Tech Core */}
        <motion.rect
          x="75"
          y="75"
          width="50"
          height="50"
          rx="12"
          fill="rgba(245, 158, 11, 0.2)"
          stroke="#F59E0B"
          strokeWidth="2"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          style={{ transformOrigin: '100px 100px' }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Dot */}
        <circle cx="100" cy="100" r="4" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)" />
        
        {/* Floating Orbiting Nodes */}
        <motion.g
          animate={{ rotate: 360 }}
          style={{ transformOrigin: '100px 100px' }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Node 1 */}
          <circle cx="100" cy="15" r="6" fill="#FCD34D" filter="drop-shadow(0 0 5px #FCD34D)" />
          <path d="M100 15 L100 75" stroke="rgba(245, 158, 11, 0.3)" strokeDasharray="4 4" strokeWidth="1.5" />
          
          {/* Node 2 */}
          <circle cx="173" cy="142" r="4" fill="#D97706" />
          <path d="M173 142 L121 112" stroke="rgba(245, 158, 11, 0.3)" strokeDasharray="4 4" strokeWidth="1.5" />
          
          {/* Node 3 */}
          <circle cx="27" cy="142" r="8" fill="#F59E0B" filter="drop-shadow(0 0 8px #F59E0B)" />
          <path d="M27 142 L79 112" stroke="rgba(245, 158, 11, 0.3)" strokeDasharray="4 4" strokeWidth="1.5" />
        </motion.g>

        {/* Counter-Rotating Nodes */}
        <motion.g
          animate={{ rotate: -360 }}
          style={{ transformOrigin: '100px 100px' }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
           <circle cx="150" cy="30" r="3" fill="#ffffff" opacity="0.8" />
           <circle cx="20" cy="80" r="5" fill="#FCD34D" opacity="0.6" />
           <circle cx="120" cy="180" r="4" fill="#D97706" opacity="0.7" />
        </motion.g>

        {/* Outer Hexagon */}
        <motion.polygon
          points="100,5 182,52 182,148 100,195 18,148 18,52"
          fill="none"
          stroke="rgba(245, 158, 11, 0.15)"
          strokeWidth="1.5"
          animate={{
            scale: [0.95, 1.02, 0.95],
            rotate: [0, -5, 0]
          }}
          style={{ transformOrigin: '100px 100px' }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dynamic Wave Lines */}
        <motion.path
          d="M 60 100 Q 80 60 100 100 T 140 100"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <defs>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
