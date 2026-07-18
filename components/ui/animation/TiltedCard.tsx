import type { SpringOptions } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Hook sederhana untuk mendapatkan ukuran viewport (lebar & tinggi jendela).
 */
function useViewport() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
}

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  /** Jika ingin override default responsive sizing, bisa berikan props ini.
   *  Contoh: { mobile: "150px", tablet: "200px", desktop: "300px" } */
  customContainerHeights?: {
    mobile?: React.CSSProperties["height"];
    tablet?: React.CSSProperties["height"];
    desktop?: React.CSSProperties["height"];
  };
  customContainerWidths?: {
    mobile?: React.CSSProperties["width"];
    tablet?: React.CSSProperties["width"];
    desktop?: React.CSSProperties["width"];
  };
  customImageHeights?: {
    mobile?: React.CSSProperties["height"];
    tablet?: React.CSSProperties["height"];
    desktop?: React.CSSProperties["height"];
  };
  customImageWidths?: {
    mobile?: React.CSSProperties["width"];
    tablet?: React.CSSProperties["width"];
    desktop?: React.CSSProperties["width"];
  };
  /** Jika override amplitude rotate per perangkat */
  customRotateAmplitude?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /** Jika override scaleOnHover per perangkat */
  customScaleOnHover?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  customContainerHeights,
  customContainerWidths,
  customImageHeights,
  customImageWidths,
  customRotateAmplitude,
  customScaleOnHover,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  // 1. Ambil ukuran viewport
  const { width: viewportWidth } = useViewport();

  // 2. Tentukan kategori perangkat berdasarkan lebar layar
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
  const isDesktop = viewportWidth >= 1024;

  // 3. Set nilai default untuk setiap kategori (kan bisa dioverride via props)
  const defaultContainerHeight = isMobile
    ? "200px"
    : isTablet
    ? "250px"
    : "300px";
  const defaultContainerWidth = isMobile
    ? "90vw"
    : isTablet
    ? "400px"
    : "500px";
  const defaultImageHeight = isMobile
    ? "200px"
    : isTablet
    ? "250px"
    : "300px";
  const defaultImageWidth = isMobile
    ? "200px"
    : isTablet
    ? "250px"
    : "300px";
  const defaultRotateAmplitude = isMobile ? 0 : isTablet ? 8 : 14;
  const defaultScaleOnHover = isMobile ? 1 : isTablet ? 1.05 : 1.1;

  // 4. Gunakan nilai override (jika diberikan) atau default
  const containerHeight =
    (isMobile && customContainerHeights?.mobile) ||
    (isTablet && customContainerHeights?.tablet) ||
    (isDesktop && customContainerHeights?.desktop) ||
    defaultContainerHeight;

  const containerWidth =
    (isMobile && customContainerWidths?.mobile) ||
    (isTablet && customContainerWidths?.tablet) ||
    (isDesktop && customContainerWidths?.desktop) ||
    defaultContainerWidth;

  const imageHeight =
    (isMobile && customImageHeights?.mobile) ||
    (isTablet && customImageHeights?.tablet) ||
    (isDesktop && customImageHeights?.desktop) ||
    defaultImageHeight;

  const imageWidth =
    (isMobile && customImageWidths?.mobile) ||
    (isTablet && customImageWidths?.tablet) ||
    (isDesktop && customImageWidths?.desktop) ||
    defaultImageWidth;

  const rotateAmplitude =
    (isMobile && customRotateAmplitude?.mobile) ||
    (isTablet && customRotateAmplitude?.tablet) ||
    (isDesktop && customRotateAmplitude?.desktop) ||
    defaultRotateAmplitude;

  const scaleOnHover =
    (isMobile && customScaleOnHover?.mobile) ||
    (isTablet && customScaleOnHover?.tablet) ||
    (isDesktop && customScaleOnHover?.desktop) ||
    defaultScaleOnHover;

  // 5. Inisialisasi motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  // 6. Handler mouse move
  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    // Jika amplitude = 0 (biasanya di mobile), langsung return (tidak ada efek tilt)
    if (rotateAmplitude === 0) return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    // Jika mobile (scaleOnHover = 1), efek scale tidak akan berpengaruh
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && isMobile && (
        <div className="absolute top-4 text-center text-sm block sm:hidden px-2">
          Efek 3D tidak optimal di ponsel. Coba buka di desktop atau tablet.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 z-[3] rounded-[4px] border border-border bg-card px-[10px] py-[4px] text-[10px] text-foreground opacity-0"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
