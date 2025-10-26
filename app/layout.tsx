import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Halo - 讓有溫度的連結再次出現。",
  description:
    "一個真實的真人互助網路。我們不僅媒合有意義的連結，更結合「Halo Space」實體據點，讓你的每一次啟發，都從一杯有溫度的咖啡開始。",
  //url: "https://halo.com",
};
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Halo", "Coffee Chat", "學習", "交流", "啟發"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    //url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    //images: [siteConfig.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTC.variable} ${notoSerifTC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
