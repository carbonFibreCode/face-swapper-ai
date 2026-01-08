'use client'

import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Masonry from 'react-masonry-css'


const TEMPLATES = [
    { id: "1", title: "Cyberpunk City", image: "https://images.unsplash.com/photo-1533907650686-705761a0863a?q=80&w=800&auto=format&fit=crop", height: 380 },
    { id: "2", title: "Business Presentation", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop", height: 280 },
    { id: "3", title: "Movie Trailer", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", height: 320 },
    { id: "4", title: "Social Media Reel", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", height: 420 },
    { id: "5", title: "Dancing Scene", image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=800&auto=format&fit=crop", height: 360 },
    { id: "6", title: "Gaming Setup", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", height: 300 },
    { id: "7", title: "Street Performance", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop", height: 340 },
    { id: "8", title: "Tech Review", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", height: 290 },
]

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
                <div key={t.id} className="mb-4">
                    <div
                        className="group relative overflow-hidden cursor-pointer rounded-xl border-2 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all hover:shadow-xl"
                        style={{ height: `${t.height}px` }}
                    >

                        <img
                            src={t.image}
                            alt={t.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="secondary" size="icon" className="rounded-full h-12 w-12">
                                <Play className="h-6 w-6 ml-1" />
                            </Button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <span className="font-medium text-sm text-white">{t.title}</span>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            {Math.floor(Math.random() * 100)}k
                        </div>
                    </div>
                </div>
            ))}
        </Masonry>
    )
}
