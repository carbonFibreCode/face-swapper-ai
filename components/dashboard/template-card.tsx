"use client";
import { useDashboardStore } from "@/lib/stores/dashboard-store";
import { useEditorStore } from "@/lib/stores/editor-store";
import { Template } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VideoPlayer } from "../ui/video-player";
import { Asset } from "@/lib/types/assets";
interface TemplateCardProps {
    template: Template;
}
export function TemplateCard({ template }: TemplateCardProps) {
    const { playingVideoId, setPlayingVideoId } = useDashboardStore();
    const router = useRouter();
    const isPlaying = playingVideoId === template.id;
    const handlePlay = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setPlayingVideoId(template.id);
    };
    const handleUse = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const videoAsset: Asset = {
            id: template.id,
            type: 'video',
            name: template.title,
            url: template.videoUrl,
            thumbnailUrl: template.thumbnailUrl,
            duration: template.duration,
            size: 0, 
            dimensions: { width: 1920, height: 1080 }, 
            createdAt: new Date(),
        };
        useEditorStore.getState().setSelectedVideo(videoAsset);
        useEditorStore.getState().setSelectedImage(null);
        router.push('/editor');
    };
    return (
        <div className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <div className="relative aspect-[9/16] bg-black/5 dark:bg-white/5">
                {isPlaying ? (
                    <VideoPlayer 
                        src={template.videoUrl} 
                        poster={template.thumbnailUrl}
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <>
                        <Image
                            src={template.thumbnailUrl}
                            alt={template.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                         <button
                            onClick={handlePlay}
                            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                        >
                            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 hover:scale-110 transition-transform">
                                <Play className="h-6 w-6 ml-1 text-white fill-white" />
                            </div>
                        </button>
                    </>
                )}
             </div>
             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 flex items-end justify-between">
                <div>
                    <h3 className="text-white font-medium text-sm truncate max-w-[140px]">{template.title}</h3>
                    <p className="text-white/60 text-xs">{template.category}</p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                        onClick={handleUse}
                        className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors flex items-center gap-1.5 shadow-lg"
                    >
                        <span>Use Template</span>
                        <ExternalLink className="h-3 w-3" />
                    </button>
                </div>
             </div>
        </div>
    );
}