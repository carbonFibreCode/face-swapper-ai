"use client";
import { useDashboardStore } from "@/lib/stores/dashboard-store";
import { LayoutTemplate, Sparkles } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { dashboardContent } from "@/lib/content/dashboard";
export function DashboardTabs() {
    const { activeTab, setActiveTab } = useDashboardStore();
    return (
        <AnimatedTabs
            layout="variable"
            value={activeTab}
            onChange={(val) => setActiveTab(val as 'templates' | 'generations')}
            className="w-fit"
            items={[
                {
                    value: 'templates',
                    label: dashboardContent.tabs.templates,
                    icon: <LayoutTemplate className="w-4 h-4" />
                },
                {
                    value: 'generations',
                    label: dashboardContent.tabs.generations,
                    icon: <Sparkles className="w-4 h-4" />
                }
            ]}
        />
    );
}