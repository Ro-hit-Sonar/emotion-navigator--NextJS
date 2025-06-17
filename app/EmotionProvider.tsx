"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/lib/createEmotionCache";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow pt-20">{children}</main>
      
      </div>
    </CacheProvider>
  );
}
