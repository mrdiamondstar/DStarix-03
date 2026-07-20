"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Non-essential decorative chrome — loaded client-side only, after the page
// is interactive, so it never competes with first paint or hydration.
const Cursor = dynamic(() => import("./Cursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });

export default function DeferredChrome() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;
  return (
    <>
      <ScrollProgress />
      <Cursor />
    </>
  );
}
