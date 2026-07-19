"use client"

const CatLoader = () => {
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

      <div role="status" aria-label="Loading page" className="flex min-h-[100svh] w-full items-center justify-center bg-background">
        <div className="relative w-48 h-48">
          {/* Body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-muted-foreground rounded-t-full rounded-b-md"></div>

          {/* Head */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-muted-foreground rounded-full flex items-center justify-center">
            {/* Eyes */}
            <div className="absolute top-8 left-10 w-2 h-2 bg-foreground rounded-full animate-eyeBlink"></div>
            <div className="absolute top-8 right-10 w-2 h-2 bg-foreground rounded-full animate-eyeBlink"></div>
          </div>

          {/* Ears */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-12">
            <div className="w-6 h-6 bg-muted-foreground rotate-45 animate-earTwitch"></div>
            <div className="w-6 h-6 bg-muted-foreground -rotate-45 animate-earTwitch"></div>
          </div>

          {/* Tail */}
          <div className="absolute bottom-4 right-4 w-2 h-20 bg-muted-foreground rounded-full animate-tailSwing"></div>
        </div>
      </div>
    </>
  );
};

export default CatLoader;
