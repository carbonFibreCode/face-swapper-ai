"use client";
import { GenerationsGrid } from "@/components/generations-grid";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { dashboardContent } from "@/lib/content/dashboard";
export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl font-semibold tracking-tight">{dashboardContent.tabs.generations}</h2>
                <Link href="/editor">
                    <Button
                        variant="ghost"
                        className="glass-button rounded-xl px-4 gap-2 hover:scale-105 transition-transform text-foreground"
                    >
                        <Plus className="h-4 w-4" />
                        <span>{dashboardContent.actions.newProject}</span>
                    </Button>
                </Link>
            </div>
            <div className="min-h-[400px]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <GenerationsGrid />
                </div>
            </div>
        </div>
    )
}