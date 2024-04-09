import useModalStore from "@/features/modal/model/modalStore";
import Modal from "@/shared/ui/Modal";

const ModalProvider = () => {
  const { modals, closeModal } = useModalStore();

  return (
    <>
      {Object.keys(modals).map((id) => {
        const { content, visible, footer } = modals[id];

        return (
          <Modal key={id} open={visible} content={content} footer={footer} />
        );
      })}
    </>
  );
};

export default ModalProvider;
