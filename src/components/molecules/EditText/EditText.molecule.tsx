import React, { useState } from "react";
import EditIcon from "../../../assets/svg/editIcon.svg";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onEdited: () => void;
}

const EditText: React.FC<IProps> = ({ onChange, value, onEdited }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const onIsEditModeHandler = () => {
    if (isEditMode) {
      onEdited();
    }
    setIsEditMode(!isEditMode);
  };

  if (isEditMode) {
    return (
      <div className="flex items-center" data-cy="todo-title">
        <input
          autoFocus
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mr-6 bg-inherit focus:outline-none border-b border-black text-4xl font-bold text-dark pb-2"
        />
        <div onClick={onIsEditModeHandler} data-cy="todo-title-edit-button">
          <img src={EditIcon} alt="edit" className="scale-125" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center"
      onClick={onIsEditModeHandler}
      data-cy="todo-title"
    >
      <h1 className="text-4xl font-bold text-dark mr-6">{value}</h1>
      <div data-cy="todo-title-edit-button">
        <img src={EditIcon} alt="edit" className="scale-125" />
      </div>
    </div>
  );
};

export default EditText;
