"use client";

import { useState } from "react";
import Preload from "./Preload";

interface PreloadWrapperProps {
  children: React.ReactNode;
}

export default function PreloadWrapper({ children }: PreloadWrapperProps) {
  const [initialDone, setInitialDone] = useState(false);

  // dipanggil Preload saat animasi selesai
  const handleStart = () => {
    setInitialDone(true);
  };

  // sebelum initial selesai → tampilkan Preload
  if (!initialDone) {
    return <Preload onStart={handleStart} />;
  }

  // setelah initial selesai → langsung render semua children biasa
  return <>{children}</>;
}
