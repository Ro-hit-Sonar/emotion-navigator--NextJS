import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import EmotionProvider from "./EmotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emotion Navigator",
  description: "Navigate your emotions with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
