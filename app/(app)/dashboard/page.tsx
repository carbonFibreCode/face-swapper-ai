import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { TemplateGrid } from "@/components/template-grid"

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">Select a template to start swapping faces.</p>
                </div>
                <Link href="/editor/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New Project
                    </Button>
                </Link>
            </div>

            <TemplateGrid />
        </div>
    )
}