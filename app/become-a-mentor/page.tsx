"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { submitMentorApplication } from "@/app/actions";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

type Step = "name" | "email" | "profile" | "topics" | "success";

export default function BecomeMentorPage() {
  const [currentStep, setCurrentStep] = useState<Step>("name");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    profile_url: "",
    topics: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const steps: Step[] = useMemo(
    () => ["name", "email", "profile", "topics", "success"],
    [],
  );
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / (steps.length - 1)) * 100;

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateStep = useCallback((): boolean => {
    switch (currentStep) {
      case "name":
        if (!formData.full_name.trim()) {
          setError("請輸入您的姓名");
          return false;
        }
        return true;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setError("請輸入有效的 Email 地址");
          return false;
        }
        return true;
      case "profile":
        try {
          new URL(formData.profile_url);
          return true;
        } catch {
          setError("請輸入有效的網址");
          return false;
        }
      case "topics":
        if (!formData.topics.trim()) {
          setError("請至少輸入一個主題");
          return false;
        }
        return true;
      default:
        return true;
    }
  }, [currentStep, formData]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setError("");

    const topics_preview = formData.topics
      .split(",")
      .map((topic) => topic.trim())
      .filter((topic) => topic.length > 0);

    const result = await submitMentorApplication({
      email: formData.email,
      full_name: formData.full_name,
      profile_url: formData.profile_url,
      topics_preview,
    });

    setIsSubmitting(false);

    if (result.success) {
      setCurrentStep("success");
    } else {
      setError("發生錯誤，請稍後再試");
    }
  }, [formData]);

  const handleNext = useCallback(async () => {
    if (!validateStep()) return;

    if (currentStep === "topics") {
      await handleSubmit();
    } else {
      const nextIndex = currentStepIndex + 1;
      setCurrentStep(steps[nextIndex]);
    }
  }, [currentStep, currentStepIndex, steps, validateStep, handleSubmit]);

  // Handle Enter key press
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleNext]);

  const renderStep = () => {
    switch (currentStep) {
      case "name":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-stone-500">首先,</p>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                您的姓名是？
              </h1>
            </div>
            <input
              type="text"
              value={formData.full_name}
              onChange={(e) => updateField("full_name", e.target.value)}
              placeholder="輸入您的真實姓名"
              autoFocus
              className="w-full text-2xl md:text-3xl font-medium bg-transparent border-0 border-b-4 border-stone-300 dark:border-stone-700 focus:border-orange-500 dark:focus:border-orange-500 outline-none py-4 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
            />
          </div>
        );

      case "email":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-stone-500">
                很高興認識您, {formData.full_name}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                您的 Email 是？
              </h1>
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="your@email.com"
              autoFocus
              className="w-full text-2xl md:text-3xl font-medium bg-transparent border-0 border-b-4 border-stone-300 dark:border-stone-700 focus:border-orange-500 dark:focus:border-orange-500 outline-none py-4 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
            />
          </div>
        );

      case "profile":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-stone-500">接下來,</p>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                分享您的個人檔案連結
              </h1>
              <p className="text-lg text-stone-500 pt-2">
                LinkedIn 或 Threads 連結，讓我們更了解您
              </p>
            </div>
            <input
              type="url"
              value={formData.profile_url}
              onChange={(e) => updateField("profile_url", e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
              autoFocus
              className="w-full text-2xl md:text-3xl font-medium bg-transparent border-0 border-b-4 border-stone-300 dark:border-stone-700 focus:border-orange-500 dark:focus:border-orange-500 outline-none py-4 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
            />
          </div>
        );

      case "topics":
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-stone-500">最後一個問題,</p>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                您想分享哪些主題？
              </h1>
              <p className="text-lg text-stone-500 pt-2">
                請用逗號分隔多個主題
              </p>
            </div>
            <textarea
              value={formData.topics}
              onChange={(e) => updateField("topics", e.target.value)}
              placeholder="例如: 產品設計, 職涯發展, 創業經驗"
              autoFocus
              rows={3}
              className="w-full text-2xl md:text-3xl font-medium bg-transparent border-0 border-b-4 border-stone-300 dark:border-stone-700 focus:border-orange-500 dark:focus:border-orange-500 outline-none py-4 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors resize-none"
            />
          </div>
        );

      case "success":
        return (
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                感謝您的申請！
              </h1>
              <p className="text-xl text-stone-600 dark:text-stone-400 max-w-lg mx-auto">
                我們已收到您的 Mentor 申請，會在審核後儘快與您聯繫。
              </p>
            </div>
            <Link
              href="/"
              className="inline-block mt-8 px-8 py-4 rounded-xl font-medium text-lg bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200"
            >
              返回首頁
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col">
      {/* Progress Bar */}
      {currentStep !== "success" && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 dark:bg-stone-800 z-50">
          <div
            className="h-full bg-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {renderStep()}

          {/* Error Message */}
          {error && currentStep !== "success" && (
            <div className="mt-6 animate-fade-in-up">
              <p className="text-red-500 text-lg">⚠️ {error}</p>
            </div>
          )}

          {/* Action Buttons */}
          {currentStep !== "success" && (
            <div className="mt-12 flex items-center gap-4">
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg",
                  "bg-orange-600 hover:bg-orange-700 text-white",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transition-all duration-200",
                  "group",
                )}
              >
                {isSubmitting ? (
                  "送出中..."
                ) : currentStep === "topics" ? (
                  <>
                    提交申請
                    <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    繼續
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-stone-500 text-sm">
                按{" "}
                <kbd className="px-2 py-1 bg-stone-200 dark:bg-stone-800 rounded">
                  Enter ↵
                </kbd>
              </p>
            </div>
          )}

          {/* Step Indicator */}
          {currentStep !== "success" && (
            <div className="mt-12 flex items-center gap-2">
              {steps.slice(0, -1).map((step, index) => (
                <div
                  key={step}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index <= currentStepIndex
                      ? "bg-orange-500 w-8"
                      : "bg-stone-300 dark:bg-stone-700 w-2",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 px-6 text-center">
        <p className="text-sm text-stone-500">Halo · 成為 Mentor</p>
      </div>
    </div>
  );
}
