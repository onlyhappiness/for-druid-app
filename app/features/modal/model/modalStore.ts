import { create } from "zustand";

interface ModalData {
  id: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  visible: boolean;
}

interface ModalState {
  modals: Record<string, ModalData>;
  openModal: ({ id, content, footer }: any) => void;
  closeModal: ({ id }: { id: string }) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modals: {},
  openModal: ({ id, content, footer }) =>
    set((state) => ({
      modals: { ...state.modals, [id]: { content, footer, visible: true } },
    })),
  closeModal: ({ id }) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [id]: { ...state.modals[id], visible: false },
      },
    })),
}));

export default useModalStore;
