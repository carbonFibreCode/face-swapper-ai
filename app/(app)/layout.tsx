import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-gradient-mesh min-h-screen">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <AppHeader />
                    <main className="flex flex-1 flex-col gap-6 p-4 pt-2">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}