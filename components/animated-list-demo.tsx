"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { CircleDollarSign, CircleCheckBig } from "lucide-react";
import { ReactNode } from "react";

interface Item {
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
  time: string;
  amount?: string;
}

let notifications = [
  {
    name: "Kevin Chen",
    description: "No Show 已補償",
    time: "2 分鐘前",
    icon: <CircleDollarSign className="w-5 h-5" />,
    color: "#10b981",
    amount: "NT$ 500",
  },
  {
    name: "Sophia Wang",
    description: "準時赴約",
    time: "5 分鐘前",
    icon: <CircleCheckBig className="w-5 h-5" />,
    color: "#3b82f6",
    amount: "NT$ 300",
  },
  {
    name: "Daniel Lee",
    description: "No Show 已補償",
    time: "8 分鐘前",
    icon: <CircleDollarSign className="w-5 h-5" />,
    color: "#10b981",
    amount: "NT$ 500",
  },
  {
    name: "Emily Lin",
    description: "準時赴約",
    time: "12 分鐘前",
    icon: <CircleCheckBig className="w-5 h-5" />,
    color: "#3b82f6",
    amount: "NT$ 300",
  },
  {
    name: "Michael Zhang",
    description: "No Show 已補償",
    time: "15 分鐘前",
    icon: <CircleDollarSign className="w-5 h-5" />,
    color: "#10b981",
    amount: "NT$ 500",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  icon,
  color,
  time,
  amount,
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl text-white"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex items-center justify-between gap-2">
            <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
              <span className="text-sm sm:text-lg">{name}</span>
              {amount && (
                <span className="ml-2 text-xs font-bold text-green-600 dark:text-green-400">
                  {amount}
                </span>
              )}
            </figcaption>
            <span className="text-xs text-stone-500 dark:text-stone-400">
              {time}
            </span>
          </div>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg border bg-transparent p-6 shadow-lg",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
