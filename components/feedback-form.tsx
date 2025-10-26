"use client";

import { useState } from "react";
import { submitFeedback } from "@/app/actions";
import { Sparkles } from "lucide-react";

export function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!feedback.trim()) {
      setStatus("error");
      setErrorMessage("請輸入你的想法");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const result = await submitFeedback(feedback);

    if (result.success) {
      setStatus("success");
      setFeedback("");
      // 3秒後重置狀態
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setErrorMessage(result.error || "提交失敗，請稍後再試");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="分享你對 Halo 的任何想法、建議或回饋..."
          rows={5}
          disabled={status === "submitting"}
          className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-orange-500 dark:focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900/30 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "submitting" || !feedback.trim()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-stone-800 border-2 border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-300 font-semibold hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-stone-800"
          >
            <Sparkles className="w-5 h-5" />
            <span>
              {status === "submitting" ? "提交中..." : "分享你的想法"}
            </span>
          </button>
        </div>

        {/* 狀態訊息 */}
        {status === "success" && (
          <p className="text-sm text-green-600 dark:text-green-400 text-center">
            ✓ 感謝你的回饋！我們會仔細閱讀每一則意見
          </p>
        )}

        {status === "error" && errorMessage && (
          <p className="text-sm text-red-600 dark:text-red-400 text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
