"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
export interface MediaBoxGridProps {
    children: ReactNode;
    className?: string;
}
export function MediaBoxGrid({ children, className }: MediaBoxGridProps) {
    return (
        <div
            className={cn(
                "flex flex-col md:flex-row",
                "gap-4 md:gap-6",
                "w-full",
                "[&>*]:flex-1 [&>*]:min-w-0",
                className
            )}
        >
            {children}
        </div>
    );
}