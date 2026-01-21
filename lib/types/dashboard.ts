export interface Template {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
  category: string;
}
export interface Generation {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  createdAt: Date;
  prompt?: string;
  duration?: number;
}
