import { cn } from "@/lib/utils"
import { Upload } from "lucide-react"
import { useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface FacePickerProps {
  onSelect: (file: File | string) => void
  selectedFaceId?: string
}

const MOCK_ASSETS = [
  { id: "1", url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" },
  { id: "2", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { id: "3", url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop" },
]

export function FacePicker({ onSelect, selectedFaceId }: FacePickerProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedId(null)
      onSelect(file)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedId(null)
      onSelect(file)
    }
  }

  const handleAssetClick = (asset: { id: string; url: string }) => {
    setSelectedId(asset.id)
    onSelect(asset.id)
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <h3 className="font-semibold mb-3">Select Face</h3>


      <label
        htmlFor="face-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleLeave}
        onDrop={handleDrop}
        className={cn(
          "relative flex-1 w-full rounded-xl border-2 border-dashed cursor-pointer transition-all",
          "flex flex-col items-center justify-center gap-3",
          "hover:border-primary hover:bg-primary/5",
          isDragging ? "border-primary bg-primary/10 scale-[0.98]" : "border-muted-foreground/25"
        )}
      >
        <Upload className="w-10 h-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground text-center px-4">
          Click to upload or drag & drop
        </p>
        <input
          id="face-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
      </label>
      
      <div className="space-y-2 mt-4 flex-shrink-0">
        <h4 className="font-medium text-sm text-muted-foreground">Recently Used</h4>
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-1">
            {MOCK_ASSETS.map((asset) => (
              <button
                key={asset.id}
                onClick={() => handleAssetClick(asset)}
                className={cn(
                  "relative w-14 h-14 rounded-lg overflow-hidden transition-all flex-shrink-0",
                  "hover:scale-95 hover:opacity-80",
                  selectedId === asset.id
                    ? "ring-2 ring-primary scale-95"
                    : ""
                )}
              >
                <img
                  src={asset.url}
                  alt="Face option"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}
