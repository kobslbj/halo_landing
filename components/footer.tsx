"use client";

import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-stone-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 主要內容 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo 和描述 */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="w-6 h-6 text-orange-500" />
                <span className="text-2xl font-bold text-white">Halo</span>
              </div>
              <p className="text-sm text-stone-400 text-center md:text-left max-w-xs">
                重新定義 Coffee Chat，讓每一次對談都有價值
              </p>
            </div>

            {/* 連結區域 */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <a
                href="/become-a-mentor"
                className="text-sm hover:text-orange-400 transition-colors"
              >
                成為 Mentor
              </a>
              <a
                href="mailto:kobs666666@gmail.com"
                className="text-sm hover:text-orange-400 transition-colors"
              >
                聯絡我們
              </a>
            </div>
          </div>

          {/* 分隔線 */}
          <div className="my-8 h-px bg-stone-800"></div>

          {/* 版權資訊 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Halo. All rights reserved.</p>
            <p className="text-center md:text-right">
              Made with <span className="text-orange-500">♥</span> for
              meaningful connections
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
