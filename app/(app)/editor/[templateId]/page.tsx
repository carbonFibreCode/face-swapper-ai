"use client"
import { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Zap, Download, Share2 } from "lucide-react"
import Link from "next/link"
import { FacePicker } from "@/components/editor/face-picker"
import { VideoPreview } from "@/components/editor/video-preview"
import { toast } from "sonner"
import { startGeneration, checkGenerationStatus } from "@/app/actions/generate"
const MOCK_TEMPLATE = {
  title: "Cyberpunk City Walk",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  duration: "12s",
  cost: 15
}
export default function EditorPage({ params }: { params: Promise<{ templateId: string }> }) {
  const { templateId } = use(params)
  const [selectedFace, setSelectedFace] = useState<File | string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [generationId, setGenerationId] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (generationId && (status === "QUEUED" || status === "PENDING" || status === "PROCESSING")) {
      intervalId = setInterval(async () => {
        try {
          const data = await checkGenerationStatus(generationId)
          if (data.error) {
             console.error("Polling error:", data.error)
             return
          }
          if (data.status) setStatus(data.status as string)
          if (data.resultUrl) {
            setResult(data.resultUrl)
            setIsGenerating(false)
            setStatus("COMPLETED")
            toast.success("Video generated successfully!")
          }
          if (data.status === "FAILED") {
            setIsGenerating(false)
            setStatus("FAILED")
            toast.error(data.failureReason || "Generation failed")
          }
        } catch (err) {
          console.error("Polling exception:", err)
        }
      }, 3000)  
    }
    return () => clearInterval(intervalId)
  }, [generationId, status])
  const handleGenerate = async () => {
    if (!selectedFace) {
      toast.error("Please select a face first")
      return
    }
    if (typeof selectedFace !== 'string') {
        toast.error("Please wait for upload to finish")
        return
    }
    setIsGenerating(true)
    setStatus("QUEUED")
    setResult(null)
    try {
      const res = await startGeneration(templateId, selectedFace)
      if (res.error) {
        if (res.error.toLowerCase().includes("credits")) {
             toast.error("Host has insufficient credits", {
                 description: res.error,
             })
        } else {
             toast.error(res.error)
        }
        setIsGenerating(false)
        return
      }
      if (res.success && res.generationId) {
        setGenerationId(res.generationId)
        toast.info("Generation started! Please wait...")
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to start generation")
      setIsGenerating(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/templates">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{MOCK_TEMPLATE.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {MOCK_TEMPLATE.duration} • {MOCK_TEMPLATE.cost} credits
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {result && (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <a href={result} download target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6 bg-card h-[600px] flex flex-col">
            <FacePicker
              onSelect={(file) => setSelectedFace(file)}
              selectedFaceId={typeof selectedFace === 'string' ? selectedFace : undefined}
            />
            <div className="space-y-4 mt-auto">
              <Button
                className="w-full"
                size="lg"
                onClick={handleGenerate}
                disabled={!selectedFace || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Zap className="mr-2 h-5 w-5 animate-pulse icon-gradient-cyan-purple" />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                      {status === "QUEUED" ? "Queued..." : "Generating..."}
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 icon-gradient-pink" />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                      Generate Video
                    </span>
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className="border rounded-xl overflow-hidden bg-card h-[600px]">
            <VideoPreview
              templateUrl={MOCK_TEMPLATE.videoUrl}
              resultUrl={result}
              isProcessing={isGenerating}
            />
          </div>
        </div>
      </main>
    </div>
  )
}