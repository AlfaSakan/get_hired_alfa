import React from "react";
import ReactModal from "react-modal";
import WarningIcon from "../../../assets/svg/warningIcon.svg";
import { Button } from "../../atoms";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  item: string;
  confirmDelete: () => void;
}

const customStyles = {
  content: {
    backgroundColor: "white",
    top: "45%",
    left: "60%",
    borderRadius: "12px",
    transform: "translate(-80%, -40%)",
    paddingHorizontal: 62,
  },
};

const ModalDelete: React.FC<IProps> = ({
  closeModal,
  isOpen,
  item,
  confirmDelete,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div className="flex justify-center mb-8 mt-10">
          <img src={WarningIcon} alt="warning icon" />
        </div>
        <div className="flex items-center flex-col">
          <p className="text-lg font-medium">
            Apakah anda yakin menghapus activity
          </p>
          <p className="text-lg font-bold mb-11">"{item}"?</p>
          <div className="flex items-center space-x-6">
            <Button
              text="Batal"
              isPrefix={false}
              color="bg-backgroundColor"
              isBgColorDark={false}
              onClick={closeModal}
            />
            <Button
              text="Hapus"
              isPrefix={false}
              color="bg-redPriority"
              onClick={() => {
                closeModal();
                confirmDelete();
              }}
            />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalDelete;
