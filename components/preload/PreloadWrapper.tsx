"use client";

import React, { useState, useEffect } from "react";
import Preload from "./Preload";

interface PreloadWrapperProps {
  children: React.ReactNode;
}

export default function PreloadWrapper({ children }: PreloadWrapperProps) {
  // Gunakan state untuk mengontrol apakah preload awal sudah selesai
  const [initialDone, setInitialDone] = useState(false);
  // State untuk memastikan pengecekan sessionStorage hanya terjadi di client-side
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Cek sessionStorage saat komponen pertama kali mount di client
    if (sessionStorage.getItem("initialPreloadDone") === "true") {
      setInitialDone(true);
    }
  }, []);

  // Fungsi ini dipanggil saat tombol "Get Started" di Preload.tsx ditekan
  const handleStart = () => {
    // Tandai di sessionStorage bahwa preload sudah selesai
    sessionStorage.setItem("initialPreloadDone", "true");
    setInitialDone(true);
  };

  // Tampilkan preloader sebagai fallback sampai client-side mount selesai.
  if (!isMounted) {
    return <Preload onStart={handleStart} />;
  }

  // Jika preload awal belum selesai, tampilkan komponen Preload
  if (!initialDone) {
    return <Preload onStart={handleStart} />;
  }

  // Jika preload awal sudah selesai, tampilkan konten utama aplikasi
  return <>{children}</>;
}
