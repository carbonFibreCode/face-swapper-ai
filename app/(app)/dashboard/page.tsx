"use client";
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs";
import { GenerationsGrid } from "@/components/generations-grid";
import { TemplateGrid } from "@/components/template-grid";
import { Button } from "@/components/ui/button";
import { useDashboardStore } from "@/lib/stores/dashboard-store";
import { Plus } from "lucide-react";
import Link from "next/link";
import { dashboardContent } from "@/lib/content/dashboard";
export default function DashboardPage() {
    const { activeTab } = useDashboardStore();
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <DashboardTabs />
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
                {activeTab === 'templates' ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <TemplateGrid />
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <GenerationsGrid />
                    </div>
                )}
            </div>
        </div>
    )
}