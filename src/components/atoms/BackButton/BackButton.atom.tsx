import React from "react";
import ArrowBackIcon from "../../../assets/svg/arrowBackIcon.svg";

interface IProps {
  onClick?: () => void;
}

const BackButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src={ArrowBackIcon} alt="back arrow" data-cy="todo-back-button" />
    </div>
  );
};

export default BackButton;
