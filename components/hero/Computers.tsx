"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

interface ComputersProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile, isTablet }) => {
  const computer = useGLTF("/assets/desktop_pc/gaming_desktop_pc.glb");

  // Default untuk desktop
  let scaleValue = 0.75;
  let positionValue: [number, number, number] = [0, -3.0, -1.5];

  // Jika tablet
  if (isTablet) {
    scaleValue = 0.8;
    positionValue = [0, -2.5, -2.0];
  }
  // Jika mobile—(portrait atau landscape)—tetap pakai nilai mobile,
  // meski sebenarnya di render guard kita akan return null.
  else if (isMobile) {
    scaleValue = 0.7;
    positionValue = [0, -2.0, -2.2];
  }

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={scaleValue}
        position={positionValue}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. Mount guard
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 2. Media query untuk mobile (portrait), mobile (landscape), dan tablet
  useEffect(() => {
    // HP potret/landscape: lebar layar ≤ 500px
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    // HP landscape: lebar layar ≤ 500px + orientation landscape
    const mobileLandscapeQuery = window.matchMedia(
      "(max-width: 500px) and (orientation: landscape)"
    );
    // Tablet: lebar 501px – 1024px (baik portrait maupun landscape)
    const tabletQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1024px)"
    );

    // Set keadaan awal
    setIsMobile(mobileQuery.matches);
    setIsMobileLandscape(mobileLandscapeQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Handler
    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    const handleMobileLandscapeChange = (e: MediaQueryListEvent) => {
      setIsMobileLandscape(e.matches);
    };
    const handleTabletChange = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    mobileLandscapeQuery.addEventListener("change", handleMobileLandscapeChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      mobileLandscapeQuery.removeEventListener(
        "change",
        handleMobileLandscapeChange
      );
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Jika belum mount, atau mobile (portrait), atau mobile dalam mode landscape → jangan render
  if (!hasMounted || isMobileLandscape || isMobile) {
    return null;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile} isTablet={isTablet} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
