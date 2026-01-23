"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User } from "lucide-react";
interface AppHeaderProps {
  title?: string;
}
export function AppHeader({ title = "Studio" }: AppHeaderProps) {
  return (
    <header
      className="sticky top-4 z-30 mx-4 mb-6 flex h-16 items-center justify-between gap-4 rounded-xl glass transition-all shadow-sm px-6"
      style={{ WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }}
    >
      {}
      <div className="flex items-center gap-4">
        <SidebarTrigger className="glass-button rounded-xl p-2 hover:scale-105 transition-transform" />
        <div className="hidden md:block">
          <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
        </div>
      </div>
      {}
      <div className="flex items-center gap-2">
        {}
        <Link href="/settings">
          <Button
            variant="ghost"
            size="icon"
            className="glass-button rounded-xl p-2 hover:scale-105 transition-transform"
          >
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
