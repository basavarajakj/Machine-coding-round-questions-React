import { create } from "zustand";

interface FilterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setQueryLength: (queryLength: number) => void;
  queryLength: number;
}

const useFilterModal = create<FilterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({isOpen: false}),
  setQueryLength: (queryLength) => set({queryLength}),
  queryLength: 0,
}))

export default useFilterModal;