"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import CatLoader from "./CatLoader";
import { getInternalDestination } from "./navigation.js";

const MINIMUM_DURATION = 700;

export default function NavigationLoader() {
  const pathname = usePathname();
  const router = useRouter();
  const timer = useRef<number>();
  const navigating = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const navigate = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const destination = getInternalDestination(anchor.href, window.location.href);
      if (!destination) return;

      event.preventDefault();
      if (navigating.current) return;

      navigating.current = true;
      setVisible(true);
      timer.current = window.setTimeout(() => {
        router.push(destination);
      }, MINIMUM_DURATION);
    };

    document.addEventListener("click", navigate, true);
    return () => {
      document.removeEventListener("click", navigate, true);
      window.clearTimeout(timer.current);
    };
  }, [router]);

  useEffect(() => {
    if (!navigating.current) return;
    navigating.current = false;
    setVisible(false);
  }, [pathname]);

  if (!visible) return null;
  return <div className="fixed inset-0 z-[9999]"><CatLoader /></div>;
}
