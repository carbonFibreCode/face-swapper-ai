import { create } from 'zustand';
type Tab = 'templates' | 'generations';
interface DashboardState {
    activeTab: Tab;
    searchQuery: string;
    playingVideoId: string | null;
}
interface DashboardActions {
    setActiveTab: (tab: Tab) => void;
    setSearchQuery: (query: string) => void;
    setPlayingVideoId: (id: string | null) => void;
}
export const useDashboardStore = create<DashboardState & DashboardActions>((set) => ({
    activeTab: 'templates',
    searchQuery: '',
    playingVideoId: null,
    setActiveTab: (tab) => set({ activeTab: tab }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setPlayingVideoId: (id) => set({ playingVideoId: id }),
}));