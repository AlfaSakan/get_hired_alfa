import React from "react";
import TrashIcon from "../../../assets/svg/trashIcon.svg";

interface IProps {
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
}

const DeleteButton: React.FC<IProps> = ({ onRemove }) => {
  return (
    <div onClick={onRemove} className="cursor-pointer">
      <img src={TrashIcon} alt="trash icon" data-cy="activity-item-delete" />
    </div>
  );
};

export default DeleteButton;
