"use client";

import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { WaitlistForm } from "@/components/waitlist-form";
import { FeedbackForm } from "@/components/feedback-form";
import { Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-orange-950/20 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* 主要內容 */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Learner 區塊 */}
          <div>
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-stone-800 border border-blue-200 dark:border-blue-800 px-4 py-2 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
                  For Learner
                </span>
              </div>
            </div>

            {/* 標題 */}
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 text-center mb-6"
            >
              找到那個「改變你一生」的人
            </TextAnimate>

            {/* 內容 */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
                你需要的不是更多零散的資訊，而是一次
                <span className="font-semibold text-blue-900 dark:text-blue-400">
                  「真誠的對話」
                </span>
                。
              </p>

              <div className="text-left max-w-2xl mx-auto mb-8">
                <p className="text-base text-stone-600 dark:text-stone-400 mb-4">
                  無論你是：
                </p>
                <ul className="space-y-3">
                  <li className="text-stone-700 dark:text-stone-300">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">
                      高中生
                    </span>{" "}
                    ｜ 正在探索科系、苦惱備審資料
                  </li>
                  <li className="text-stone-700 dark:text-stone-300">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">
                      大學生
                    </span>{" "}
                    ｜ 規劃海外研究所、或尋找實習方向
                  </li>
                  <li className="text-stone-700 dark:text-stone-300">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">
                      轉職者
                    </span>{" "}
                    ｜ 需要真實的經驗分享、甚至技能交換
                  </li>
                </ul>
              </div>

              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                Halo
                能幫你跳過大海撈針的過程，精準找到「真正走過那條路」的前輩。
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <WaitlistForm />
              <p className="text-sm text-stone-600 dark:text-stone-400">
                加入等待名單，第一時間獲得通知
              </p>
            </div>
          </div>

          {/* 分隔線 */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-stone-300 dark:bg-stone-700"></div>
            <span className="text-sm text-stone-500 dark:text-stone-400">
              或
            </span>
            <div className="flex-1 h-px bg-stone-300 dark:bg-stone-700"></div>
          </div>

          {/* Mentor 區塊 */}
          <div>
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-orange-800 px-4 py-2 shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-300">
                  For Mentor
                </span>
              </div>
            </div>

            {/* 標題 */}
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 text-center mb-6"
            >
              您是願意分享的 Mentor 嗎？
            </TextAnimate>

            {/* 內容 */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                我們知道您的痛點：被
                <span className="font-semibold text-orange-900 dark:text-orange-400">
                  「放鳥」
                </span>
                、
                <span className="font-semibold text-orange-900 dark:text-orange-400">
                  管理眾多私訊
                </span>
                。
              </p>

              <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                Halo 的
                <span className="font-semibold text-orange-900 dark:text-orange-400">
                  「訂金機制」
                </span>
                和
                <span className="font-semibold text-orange-900 dark:text-orange-400">
                  「統一平台」
                </span>
                ，能確保您的寶貴時間只留給真正嚴肅看待的 Learner。
              </p>

              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                我們正在打造一個高品質的互助網路，誠摯邀請您加入。
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <Link href="/become-a-mentor">
                <ShimmerButton className="shadow-2xl">
                  <span className="text-center text-base font-semibold leading-none tracking-tight whitespace-pre-wrap text-white">
                    填寫 Mentor 申請表單
                  </span>
                </ShimmerButton>
              </Link>
              <p className="text-sm text-stone-600 dark:text-stone-400 italic">
                和其他平台不一樣，我們最重視您的時間
              </p>
            </div>
          </div>

          {/* Feedback 區塊 */}
          <div className="mt-20 pt-12 border-t border-stone-300 dark:border-stone-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                對這個平台有何想法？
              </h3>
              <p className="text-base md:text-lg text-stone-600 dark:text-stone-400">
                歡迎跟我分享你的建議、想法或任何回饋
              </p>
            </div>
            <FeedbackForm />
            <p className="text-xs text-center text-stone-500 dark:text-stone-400 mt-6">
              你的反饋對我們非常重要 ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
