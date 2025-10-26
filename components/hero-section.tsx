"use client";

import Link from "next/link";
import { Sparkles, Coffee, Users } from "lucide-react";
import { LightRays } from "@/components/ui/light-rays";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { WaitlistForm } from "@/components/waitlist-form";

interface HeroSectionProps {
  waitlistCount: number;
}

export function HeroSection({ waitlistCount }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-stone-50 via-white to-stone-100">
      {/* Light Rays 效果 */}
      <LightRays
        count={8}
        color="rgba(249, 115, 22, 0.15)"
        blur={40}
        speed={16}
        length="80vh"
      />

      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 漸層圓形裝飾 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* 主要內容 */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-stone-600" />
            <span className="text-sm font-medium text-stone-700">
              Introduce a new way to connect.
            </span>
          </div>

          {/* 主標題 */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 md:text-6xl lg:text-7xl max-w-4xl">
            重新定義了
            <br />
            一場好的
            <span className="relative inline-block mx-2 my-2">
              <span className="relative z-10">coffee chat</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 rotate-1" />
            </span>
            <Coffee className="w-8 h-8 inline-block ml-2 mb-2 text-orange-600" />
          </h1>

          {/* 副標題 */}
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="mt-8 max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed"
          >
            我們相信，連結的價值不在數量，而在深度
          </TextAnimate>

          {/* Waitlist 表單 */}
          <div className="mt-10 w-full flex flex-col items-center gap-4">
            <WaitlistForm />
            {waitlistCount > 0 && (
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <Users className="w-4 h-4 text-orange-600" />
                <span>
                  已有{" "}
                  <span className="font-semibold text-orange-600">
                    {waitlistCount}
                  </span>{" "}
                  人加入等候名單
                </span>
              </div>
            )}
          </div>

          {/* CTA 按鈕 */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/become-a-mentor">
              <ShimmerButton className="shadow-2xl">
                <span className="text-center text-base font-semibold leading-none tracking-tight whitespace-pre-wrap text-white">
                  成為 Mentor
                </span>
              </ShimmerButton>
            </Link>
          </div>

          {/* 底部引言 */}
          <div className="mt-16 max-w-xl">
            <p className="text-sm text-stone-500 italic">
              因為我們相信，每一次真實的交流，都有改變人生的可能。
            </p>
          </div>
        </div>
      </div>

      {/* 底部漸層 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-stone-50 to-transparent" />
    </section>
  );
}
