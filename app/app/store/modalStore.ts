import { create } from "zustand";

interface ModalData {
  id: string;
  isOpen?: boolean;
  title?: string;
  content: string;

  onConfirm?: () => void;
  onCancel?: () => void;

  confirmText?: string;
  cancelText?: string;
}

interface ModalState {
  modals: Record<string, ModalData>;
  actions: {
    openModal: ({ id, content }: ModalData) => void;
    closeModal: ({ id }: { id: string }) => void;
  };
}

const useModalStore = create<ModalState>((set) => ({
  modals: {},

  actions: {
    openModal: ({
      id,
      title,
      content,
      onConfirm,
      onCancel,
      confirmText,
      cancelText,
    }: ModalData) => {
      set((state) => ({
        modals: {
          ...state.modals,
          [id]: {
            isOpen: true,
            id,
            title,
            content,
            onConfirm,
            onCancel,
            confirmText,
            cancelText,
          },
        },
      }));
    },
    closeModal: ({ id }: { id: string }) => {
      set((state) => ({
        modals: {
          ...state.modals,
          [id]: { ...state.modals[id], isOpen: false },
        },
      }));
    },
  },
}));

export const useModalState = ({ id }: { id: string }) =>
  useModalStore((state) => state.modals[id]);
// export const useModalActions = () => useModalStore((state) => state.actions);
export const useModalActions = () => useModalStore((state) => state.actions);
