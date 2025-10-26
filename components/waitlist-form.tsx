"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions";
import { cn } from "@/lib/utils";

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setStatus("success");
      setMessage("成功加入等待名單!");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(
        result.error === "Email already registered"
          ? "此 Email 已經註冊過了"
          : "發生錯誤,請稍後再試",
      );
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full max-w-md", className)}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="輸入您的 Email"
          required
          disabled={status === "loading"}
          className={cn(
            "flex-1 px-5 py-3.5 rounded-xl",
            "bg-white/90 dark:bg-stone-900/90",
            "border border-stone-200 dark:border-stone-800",
            "text-stone-900 dark:text-stone-100",
            "placeholder:text-stone-500",
            "focus:outline-none focus:ring-2 focus:ring-orange-500/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className={cn(
            "px-8 py-3.5 rounded-xl font-medium",
            "bg-orange-600 hover:bg-orange-700",
            "text-white",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200",
            "whitespace-nowrap",
          )}
        >
          {status === "loading" ? "送出中..." : "加入等待名單"}
        </button>
      </div>

      {message && (
        <p
          className={cn(
            "mt-3 text-sm text-center animate-fade-in-up",
            status === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400",
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
