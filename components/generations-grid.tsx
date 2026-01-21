"use client";
import { Sparkles } from "lucide-react";
export function GenerationsGrid() {
    const generations = [];  
    if (generations.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-white/5 p-6 rounded-full mb-4 ring-1 ring-white/10">
                    <Sparkles className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No generations yet</h3>
                <p className="text-muted-foreground max-w-sm mt-2">
                    Start a new project to create your first face swap video!
                </p>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            { }
             <div>Generations List</div>
        </div>
    );
}