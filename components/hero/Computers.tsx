// src/components/Computer.tsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, Environment } from "@react-three/drei";

// ----------------------------
// Loader Sederhana di dalam <Html>
// ----------------------------
const SimpleLoader: React.FC = () => (
  <Html center>
    <div
      style={{
        width: 48,
        height: 48,
        border: "4px solid rgba(229, 231, 235, 1)", // #e5e7eb
        borderTopColor: "rgba(59, 130, 246, 1)",    // #3b82f6
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>
      {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </Html>
);

// ----------------------------------
// Komponen untuk Merender Model 3D
// ----------------------------------
interface ComputerProps {
  isMobile: boolean;
}

const Computer: React.FC<ComputerProps> = ({ isMobile }) => {
  // Pastikan file GLB ada di public/desktop_pc/scene.glb
  const modelPath = "/assets/desktop_pc/gaming_desktop_pc.glb";
  const computer = useGLTF(modelPath);

  return (
    <mesh>
      {/* Ambient Light untuk pencahayaan dasar */}
      <ambientLight intensity={0.4} />

      {/* Hemisphere Light seperti sebelumnya */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Spot Light dengan intensity dinaikkan */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Tambahkan Environment Map (tanpa properti 'intensity') */}
      <Environment preset="city" />

      {/* Objek GLB */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </mesh>
  );
};

// ------------------------------------
// Komponen Utama: Canvas + Suspense
// ------------------------------------
const ComputerCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="h-full w-full"
    >
      <Suspense fallback={<SimpleLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
