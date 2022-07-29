import React from "react";
import ReactModal from "react-modal";
import SuccessIcon from "../../../assets/svg/successIcon.svg";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    backgroundColor: "white",
    top: "87%",
    left: "60%",
    borderRadius: "12px",
    transform: "translate(-80%, -550%)",
    paddingHorizontal: 62,
  },
};

interface IProps {
  isOpen: boolean;
  closeModal?: () => void;
}

const ModalSuccess: React.FC<IProps> = ({ isOpen, closeModal = () => {} }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal Success"
    >
      <div data-cy="modal-information">
        <div className="flex items-center">
          <img src={SuccessIcon} alt="success icon" className="mr-3" />
          <p className="text-sm font-medium">Activity berhasil dihapus</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalSuccess;
