import { cn } from "@/lib/utils"
import { Upload } from "lucide-react"
import { use, useEffect, useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getUserAssets, saveAssetToDb } from "@/app/actions/assets"
import { toast } from "sonner"
interface FacePickerProps {
  onSelect: (file: File | string) => void
  selectedFaceId?: string
}
type Asset = {
  id: string
  url: string
}
export function FacePicker({ onSelect, selectedFaceId }: FacePickerProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(selectedFaceId || null)
  const [assets, setAssets] = useState<Asset[]>([])
  const [isUploading, setIsUploading] = useState(false)
  useEffect(() => {
    getUserAssets().then((fetchedAssets) => {
      setAssets(fetchedAssets || [])
    }).catch((err) => console.error("Failed to load assets:", err))
  }, [])
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
      handleUpload(file)
    }
  }
  const handleAssetClick = (asset: { id: string; url: string }) => {
    setSelectedId(asset.id)
    onSelect(asset.id)
  }
  const handleUpload = async (file: File) => {
    try {
      setIsUploading(true)
      const res = await fetch('/api/upload/signed-url', {
        method: 'POST',
        body: JSON.stringify({
          fileType: file.type,
          fileSize: file.size,
        })
      })
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || "Failed to get upload URL")
      }
      const { signedUrl, publicUrl } = await res.json()
      if (!publicUrl) {
        throw new Error("API did not return a public URL. Check route.ts")
      }
      const uploadRes = await fetch(signedUrl, {
        method: 'PUT',
        body: file,
        headers: { "Content-Type": file.type }
      })
      console.log('Upload response status:', uploadRes.status)
      console.log('Upload response headers:', Object.fromEntries(uploadRes.headers))
      if (!uploadRes.ok) {
        const errorText = await uploadRes.text()
        console.error('Upload error body:', errorText)
        throw new Error(`Upload to storage failed: ${uploadRes.status} - ${errorText}`)
      }
      const newAsset = await saveAssetToDb(publicUrl)
      setAssets([newAsset, ...assets])
      setSelectedId(newAsset.id)
      onSelect(newAsset.id)
      toast.success("Face uploaded successfully!")
    } catch (error) {
      console.error(error)
      toast.error("Upload failed. Please try again.")
    } finally {
      setIsUploading(false)
    }
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
          isDragging ? "border-primary bg-primary/10 scale-[0.98]" : "border-muted-foreground/25",
          isUploading && "opacity-50 cursor-wait"
        )}
      >
        <Upload className="w-10 h-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground text-center px-4">
          {isUploading ? "Uploading..." : "Click to upload or drag & drop"}
        </p>
        <input
          id="face-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
          disabled={isUploading}
        />
      </label>
      <div className="space-y-2 mt-4 flex-shrink-0">
        <h4 className="font-medium text-sm text-muted-foreground">Recently Used</h4>
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-1">
            {assets.map((asset) => (
              <button
                key={asset.id}
                onClick={() => handleAssetClick(asset)}
                className={cn(
                  "relative w-14 h-14 rounded-lg overflow-hidden transition-all flex-shrink-0",
                  "hover:scale-95 hover:opacity-80",
                  (selectedId === asset.id || selectedFaceId === asset.id)
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