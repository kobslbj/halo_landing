"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import { Marquee } from "@/components/ui/marquee";
import AnimatedListDemo from "@/components/animated-list-demo";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
// Mentor 資料
const mentors = [
  {
    name: "Alex",
    role: "產品經理",
    topics: ["產品策略", "AI 平台", "創業經驗"],
    company: "矽谷 Data Platform 團隊",
    education: "Columbia University 數據分析碩士",
  },
  {
    name: "Eric",
    role: "管理顧問",
    topics: ["金融顧問", "職涯發展", "海外工作"],
    company: "外商管理顧問公司",
    education: "曾任香港高盛、台灣大摩",
  },
  {
    name: "Justin Li",
    role: "Founder",
    topics: ["創業經驗", "SaaS開發", "團隊管理"],
    company: "Halo",
    education: "陽明交通大學資訊管理與財務金融學系",
  },
  {
    name: "Kevin Chen",
    role: "Quantitative Trader",
    topics: ["量化交易", "數學建模", "金融工程"],
    company: "Jane Street",
    education: "MIT 數學系",
  },
  {
    name: "Sophia Wang",
    role: "醫學系學生",
    topics: ["醫學申請", "備審準備", "學測分享"],
    company: "台灣大學醫學系",
    education: "建國中學 → 台大醫學系",
  },
  {
    name: "Daniel Lee",
    role: "Quantitative Researcher",
    topics: ["演算法交易", "統計套利", "機器學習"],
    company: "Citadel Securities",
    education: "Stanford 統計所",
  },
  {
    name: "Emily Lin",
    role: "電機系學生",
    topics: ["大學申請", "程式競賽", "升學諮詢"],
    company: "台灣大學電機系",
    education: "北一女中 → 台大電機系",
  },
  {
    name: "Michael Zhang",
    role: "資工系學生",
    topics: ["資工申請", "專題經驗", "實習分享"],
    company: "清華大學資工系",
    education: "武陵高中 → 清大資工系",
  },
];

const firstRow = mentors.slice(0, 2);
const secondRow = mentors.slice(2, 4);
const thirdRow = mentors.slice(4, 6);
const fourthRow = mentors.slice(6, 8);

const MentorCard = ({
  name,
  role,
  topics,
  company,
  education,
}: {
  name: string;
  role: string;
  topics: string[];
  company: string;
  education: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "border-orange-200 bg-white hover:bg-orange-50/50",
        "dark:border-orange-800/50 dark:bg-stone-800 dark:hover:bg-orange-950/20",
        "transition-all duration-300 hover:shadow-xl",
      )}
    >
      <div className="flex flex-row items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-orange-200 dark:border-orange-800 bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-full h-full fill-orange-600 dark:fill-orange-400"
          >
            <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-lg font-bold text-stone-900 dark:text-stone-100">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            {role}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {/* 公司 */}
        <div className="flex items-start gap-2">
          <svg
            className="w-4 h-4 text-stone-500 mt-0.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <p className="text-sm text-stone-700 dark:text-stone-300 font-medium">
            {company}
          </p>
        </div>

        {/* 學歷 */}
        <div className="flex items-start gap-2">
          <svg
            className="w-4 h-4 text-stone-500 mt-0.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            {education}
          </p>
        </div>

        {/* 擅長領域 */}
        <div>
          <p className="text-xs text-stone-500 dark:text-stone-500 mb-2">
            擅長領域
          </p>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-900 dark:bg-orange-900/30 dark:text-orange-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

export function HowSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-stone-950 overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      {/* 主要內容 */}
      <div className="relative z-10 w-full py-12">
        {/* 標題 */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-stone-600" />
              <span className="text-sm font-medium text-stone-700">
                我們的解決方案
              </span>
            </div>
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              as="h2"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-4"
            >
              Halo，重建 Coffee Chat 的信任
            </TextAnimate>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              兩個核心功能，讓每一次對談都有價值
            </p>
          </div>
        </div>

        {/* 價值列表 */}
        <div className="space-y-12">
          {/* 價值 1: 精準媒合 - 使用 Marquee */}
          <div>
            <div className="container mx-auto px-4 mb-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                  精準媒合，不再大海撈針
                </h3>
                <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                  讓您根據
                  <span className="font-semibold text-orange-900 dark:text-orange-400">
                    主題
                  </span>
                  、
                  <span className="font-semibold text-orange-900 dark:text-orange-400">
                    經驗
                  </span>
                  、
                  <span className="font-semibold text-orange-900 dark:text-orange-400">
                    專業領域
                  </span>
                  ，精準找到高品質的 Mentor
                </p>
              </div>
            </div>

            {/* Mentor Marquee 3D */}
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near">
              <div
                className="flex flex-row items-center gap-4"
                style={{
                  transform:
                    "translateX(-50px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                }}
              >
                <Marquee pauseOnHover vertical className="[--duration:30s]">
                  {firstRow.map((mentor) => (
                    <MentorCard key={mentor.name} {...mentor} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:30s]"
                >
                  {secondRow.map((mentor) => (
                    <MentorCard key={mentor.name} {...mentor} />
                  ))}
                </Marquee>
                <Marquee pauseOnHover vertical className="[--duration:30s]">
                  {thirdRow.map((mentor) => (
                    <MentorCard key={mentor.name} {...mentor} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:30s]"
                >
                  {fourthRow.map((mentor) => (
                    <MentorCard key={mentor.name} {...mentor} />
                  ))}
                </Marquee>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-white dark:from-stone-950"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white dark:from-stone-950"></div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white dark:from-stone-950"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white dark:from-stone-950"></div>
            </div>
          </div>

          {/* 價值 2: 訂金機制 */}
          <div>
            <div className="container mx-auto px-4 mb-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                  訂金機制，杜絕放鳥
                </h3>
                <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                  我們重視雙方的時間。Learner 需
                  <span className="font-semibold text-green-900 dark:text-green-400">
                    預付訂金
                  </span>
                  ，若無故缺席，訂金將
                  <span className="font-semibold text-green-900 dark:text-green-400">
                    補償給 Mentor
                  </span>
                  。這建立了真正的信任與尊重，您的善意不再被浪費。
                </p>
              </div>
            </div>

            {/* 訂金通知列表 */}
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <AnimatedListDemo className="h-[400px] w-full border-none shadow-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 底部 CTA 提示 */}
        <div className="container mx-auto px-4 mt-16">
          <div className="text-center">
            <p className="text-stone-600 dark:text-stone-400 text-lg">
              準備好體驗不一樣的 Coffee Chat 了嗎？
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
