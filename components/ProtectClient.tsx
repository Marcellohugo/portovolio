// app/components/ProtectClient.tsx
"use client";

import { useEffect } from "react";

export default function ProtectClient() {
  useEffect(() => {
    // 1) Blokir shortcut: Ctrl+S, Ctrl+U, Ctrl+P, Ctrl+C
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (e.ctrlKey && (key === "s" || key === "u" || key === "p" || key === "c")) {
        e.preventDefault();
      }
      // 2) Blokir PrintScreen
      if (e.key === "PrintScreen") {
        e.preventDefault();
        // Tampilkan layar kosong sebentar, baru reload
        document.body.innerHTML = "";
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };

    // 3) Blokir klik kanan
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 4) Blokir event copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  // Component ini tidak perlu render apa-apa di UI
  return null;
}
