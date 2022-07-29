import React from "react";
import { CheckBox, DeleteButton, StatusDetail } from "../../atoms";
import EditIcon from "../../../assets/svg/editIcon.svg";
import { TodoModel } from "../../../models/Todo/Todo.model";

interface IProps {
  todo: TodoModel;
  onDeleteItem: (id: string | number) => void;
  onEditingItem?: (item: TodoModel) => void;
  isActivityHandler?: () => void;
}

const CardDetail: React.FC<IProps> = ({
  todo,
  onDeleteItem,
  isActivityHandler = () => {},
  onEditingItem = () => {},
}) => {
  return (
    <div
      className="flex bg-white rounded-xl px-7 py-[26px] items-center justify-between"
      data-cy="todo-item"
    >
      <div className="flex items-center">
        <CheckBox value={todo.is_active === 0} onChange={isActivityHandler} />
        <StatusDetail priority={todo.priority} />
        <p
          className={`mr-4 ${
            todo.is_active === 0 ? "line-through text-lightGray" : "text-dark"
          }`}
          data-cy="todo-item-title"
        >
          {todo.title}
        </p>
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onEditingItem(todo);
          }}
          data-cy="todo-item-edit-button"
        >
          <img src={EditIcon} alt="edit" />
        </div>
      </div>
      <DeleteButton
        dataCy="todo-item-delete-button"
        onRemove={() => onDeleteItem(todo.id)}
      />
    </div>
  );
};

export default CardDetail;
