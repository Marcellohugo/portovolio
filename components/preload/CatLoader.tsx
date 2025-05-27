"use client"
import React, { useState, useEffect } from 'react';

const CatLoader: React.FC = () => {
  // Wait for mount to ensure animations run in browser
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes tailSwing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes earTwitch {
          0%, 100% { transform: rotate(0deg); }
          30%, 60% { transform: rotate(10deg); }
          45% { transform: rotate(-10deg); }
        }
        @keyframes eyeBlink {
          0%, 20%, 40%, 60%, 80%, 100% { height: 0.5rem; }
          10%, 50%, 90% { height: 0.125rem; }
        }

        .animate-tailSwing { animation: tailSwing 1s ease-in-out infinite; transform-origin: top right; }
        .animate-earTwitch { animation: earTwitch 1.5s ease-in-out infinite; transform-origin: bottom; }
        .animate-eyeBlink { animation: eyeBlink 3s ease-in-out infinite; }
      `}</style>

      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="relative w-48 h-48">
          {/* Body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-gray-700 rounded-t-full rounded-b-md"></div>

          {/* Head */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            {/* Eyes */}
            <div className="absolute top-8 left-10 w-2 h-2 bg-white rounded-full animate-eyeBlink"></div>
            <div className="absolute top-8 right-10 w-2 h-2 bg-white rounded-full animate-eyeBlink"></div>
          </div>

          {/* Ears */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-12">
            <div className="w-6 h-6 bg-gray-700 rotate-45 animate-earTwitch"></div>
            <div className="w-6 h-6 bg-gray-700 -rotate-45 animate-earTwitch"></div>
          </div>

          {/* Tail */}
          <div className="absolute bottom-4 right-4 w-2 h-20 bg-gray-700 rounded-full animate-tailSwing"></div>
        </div>
      </div>
    </>
  );
};

export default CatLoader;
