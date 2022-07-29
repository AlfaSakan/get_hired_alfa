import React from "react";
import TrashIcon from "../../../assets/svg/trashIcon.svg";

interface IProps {
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
  dataCy?: string;
}

const DeleteButton: React.FC<IProps> = ({ onRemove, dataCy }) => {
  return (
    <div onClick={onRemove} className="cursor-pointer" data-cy={dataCy}>
      <img src={TrashIcon} alt="trash icon" data-cy="activity-item-delete" />
    </div>
  );
};

export default DeleteButton;
