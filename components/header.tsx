"use client";

import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Coffee } from "lucide-react";
export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] lg:max-w-4xl">
      <nav className="bg-white/90 backdrop-blur-lg rounded-full border border-gray-200 shadow-sm px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 flex items-center justify-center">
              <Coffee className="w-6 h-6 text-black" />
            </div>
            <span className="font-serif text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
              Halo
            </span>
          </Link>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="#mentor">
              <ShimmerButton className="shadow-lg px-5 py-2">
                <span className="text-center text-sm font-medium leading-none tracking-tight whitespace-nowrap text-white">
                  成為 Mentor
                </span>
              </ShimmerButton>
            </Link>
            <Link href="#waitlist">
              <ShimmerButton
                className="shadow-lg px-5 py-2"
                shimmerColor="#f97316"
                background="linear-gradient(to right, #f97316, #ea580c)"
                shimmerSize="0.08em"
              >
                <span className="text-center text-sm font-medium leading-none tracking-tight whitespace-nowrap text-white">
                  加入等待名單
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
