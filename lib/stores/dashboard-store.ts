import { create } from 'zustand';
interface DashboardState {
    searchQuery: string;
    playingVideoId: string | null;
}
interface DashboardActions {
    setSearchQuery: (query: string) => void;
    setPlayingVideoId: (id: string | null) => void;
}
export const useDashboardStore = create<DashboardState & DashboardActions>((set) => ({
    searchQuery: '',
    playingVideoId: null,
    setSearchQuery: (query) => set({ searchQuery: query }),
    setPlayingVideoId: (id) => set({ playingVideoId: id }),
}));