'use client';

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

interface ComputersProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile, isTablet }) => {
  // Load model GLTF
  const computer = useGLTF("/assets/desktop_pc/gaming_desktop_pc.glb");

  // Tentukan skala dan posisi berdasarkan jenis device
  // - Mobile: ukuran paling kecil (tetap return null di Canvas, jadi sebenarnya tidak ditampilkan)
  // - Tablet: gunakan skala sedang, posisi sedikit diubah
  // - Desktop: skala default seperti sebelumnya
  let scaleValue = 0.75;
  let positionValue: [number, number, number] = [0, -3.0, -1.5];

  if (isTablet) {
    scaleValue = 0.5;
    positionValue = [0, -2.5, -2.0];
  } else if (isMobile) {
    scaleValue = 0.4;
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
  const [isTablet, setIsTablet] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 1. Mount guard
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 2. Media query untuk mobile dan tablet
  useEffect(() => {
    // Mobile: max-width 500px
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    // Tablet: antara 501px hingga 1024px
    const tabletQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1024px)"
    );

    // Set keadaan awal
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Handler perubahan ukuran
    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    const handleTabletChange = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Jika belum di-mount atau sedang di mobile, jangan render Canvas
  if (!hasMounted || isMobile) {
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
