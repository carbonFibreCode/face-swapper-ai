import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useEditorStore } from "@/lib/stores/editor-store";
import { checkJobStatus } from "@/app/actions/check-status";
import { JobStatus } from "@/lib/types";
import { editorContent } from "@/lib/content/editor";

export function useJobPolling() {
  const pollingInterval = useRef<NodeJS.Timeout | null>(null);
  
  const {
    jobId,
    status,
    resultVideoUrl,
    setJobId,
    setStatus,
    setResultVideoUrl,
  } = useEditorStore();

  useEffect(() => {
    if (jobId && !resultVideoUrl && status !== JobStatus.FAILED) {
      pollingInterval.current = setInterval(async () => {
        const result = await checkJobStatus(jobId);

        if (result.success) {
          if (result.status === JobStatus.COMPLETED && result.videoUrl) {
            setResultVideoUrl(result.videoUrl);
            setStatus(JobStatus.COMPLETED);
            setJobId(null);
            toast.success(editorContent.status.completed);
            if (pollingInterval.current) clearInterval(pollingInterval.current);
          } else if (result.status === JobStatus.FAILED) {
            setStatus(JobStatus.FAILED);
            toast.error(result.message || editorContent.status.failed);
            setJobId(null);
            if (pollingInterval.current) clearInterval(pollingInterval.current);
          } else {
            setStatus(result.status || JobStatus.QUEUED);
          }
        }
      }, 3000);
    }

    return () => {
      if (pollingInterval.current) clearInterval(pollingInterval.current);
    };
  }, [jobId, resultVideoUrl, status, setResultVideoUrl, setStatus, setJobId]);
}
