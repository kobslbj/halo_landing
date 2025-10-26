"use client";

import { MessageSquareX, Users } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

export function ProblemSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-stone-950 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
      </div>

      {/* 主要內容 */}
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* 標題 */}
          <div className="text-center mb-16">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4"
            >
              一次好的對談，不該如此困難
            </TextAnimate>
          </div>

          {/* 痛點列表 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* 痛點 1: 混亂 */}
            <div className="group">
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-stone-700 h-full">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                      媒合混亂
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      在 Threads 和 LinkedIn 上私訊，像大海撈針，耗時且低效。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 痛點 2: 信任 */}
            <div className="group">
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-stone-700 h-full">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageSquareX className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                      「放鳥」是常態
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      缺乏承諾機制，Mentor
                      的善意和時間常被浪費。您的專業值得更多尊重。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
