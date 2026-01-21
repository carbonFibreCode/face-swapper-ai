import { Template } from "@/lib/types/dashboard";
import Masonry from 'react-masonry-css';
import { TemplateCard } from "./dashboard/template-card";
const TEMPLATES: Template[] = [
    { 
        id: "2", 
        title: "Business Presentation", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop", 
        duration: 15,
        category: "Business"
    },
    { 
        id: "3", 
        title: "Movie Trailer", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", 
        duration: 30,
        category: "Cinematic"
    },
    { 
        id: "4", 
        title: "Social Media Reel", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", 
        duration: 12,
        category: "Social Media"
    },
    { 
        id: "5", 
        title: "Dancing Scene", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=800&auto=format&fit=crop", 
        duration: 22,
        category: "Dance"
    },
    { 
        id: "6", 
        title: "Gaming Setup", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", 
        duration: 45,
        category: "Gaming"
    },
    { 
        id: "7", 
        title: "Street Performance", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop", 
        duration: 18,
        category: "Lifestyle"
    },
    { 
        id: "8", 
        title: "Tech Review", 
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", 
        thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", 
        duration: 60,
        category: "Tech"
    },
];
export function TemplateGrid() {
    const breakpointColumns = {
        default: 4,
        1280: 4,
        1024: 3,
        640: 2,
        480: 1
    }
    return (
        <Masonry
            breakpointCols={breakpointColumns}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
        >
            {TEMPLATES.map((t) => (
                <div className="mb-4" key={t.id}>
                    <TemplateCard template={t} />
                </div>
            ))}
        </Masonry>
    )
}