"use client"
import { Loader2 } from "lucide-react"
import { useEffect, useRef } from "react"
interface VideoPreviewProps {
  templateUrl: string
  resultUrl?: string | null
  isProcessing?: boolean
}
export function VideoPreview({ templateUrl, resultUrl, isProcessing }: VideoPreviewProps) {
  const activeUrl = resultUrl || templateUrl
  const isResult = !!resultUrl
  const mainVideoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const main = mainVideoRef.current
    const bg = bgVideoRef.current
    if (!main || !bg) return
    const onPlay = () => bg.play().catch(() => {})
    const onPause = () => bg.pause()
    const onSeek = () => { bg.currentTime = main.currentTime }
    bg.muted = true
    main.addEventListener('play', onPlay)
    main.addEventListener('pause', onPause)
    main.addEventListener('seeking', onSeek)
    main.addEventListener('seeked', onSeek)
    return () => {
      main.removeEventListener('play', onPlay)
      main.removeEventListener('pause', onPause)
      main.removeEventListener('seeking', onSeek)
      main.removeEventListener('seeked', onSeek)
    }
  }, [activeUrl])
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
      <video
        ref={bgVideoRef}
        key={`bg-${activeUrl}`}
        src={activeUrl}
        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <div>
              <p className="text-lg font-semibold text-white">Generating your video...</p>
              <p className="text-sm text-gray-300">AI is swapping the faces...</p>
            </div>
          </div>
        </div>
      )}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
        <video
          ref={mainVideoRef}
          key={`main-${activeUrl}`}
          src={activeUrl}
          controls
          className="max-w-full max-h-full rounded-lg shadow-2xl"
          loop
          playsInline
        />
      </div>
      <div className="absolute top-4 right-4 z-30">
        <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm text-white border border-white/20">
          {isResult ? "✨ AI Generated Result" : "📹 Preview Template"}
        </div>
      </div>
    </div>
  )
}