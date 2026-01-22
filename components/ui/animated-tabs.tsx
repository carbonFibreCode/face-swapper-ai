"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}
interface AnimatedTabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  layout?: "equal" | "variable";
}

export function AnimatedTabs({
  items,
  value,
  onChange,
  className,
  layout = "equal",
}: AnimatedTabsProps) {
  const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const itemsRef = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  React.useEffect(() => {
    const updateIndicator = () => {
      const container = containerRef.current;
      const activeItem = itemsRef.current.get(value);

      if (container && activeItem) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();

        setIndicatorStyle({
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
        });
      }
    };

    const timeoutId = setTimeout(updateIndicator, 0);

    window.addEventListener("resize", updateIndicator);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [value, items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-11 w-full items-center rounded-xl glass-card p-1.5",
        className
      )}
    >
      <div
        className="absolute top-1.5 bottom-1.5 rounded-lg glass-toggle-slider transition-all duration-300 ease-out"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
      <div className={cn("flex w-full relative z-10", layout === "variable" && "gap-1")}>
        {items.map((item) => {
          const isActive = item.value === value;

          return (
            <button
              key={item.value}
              ref={(el) => {
                if (el) itemsRef.current.set(item.value, el);
              }}
              type="button"
              onClick={() => onChange(item.value)}
              className={cn(
                "flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                layout === "equal" ? "flex-1" : "px-4 py-1.5",
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon && <span className="h-4 w-4">{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
