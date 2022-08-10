import React from "react";
import { priorityType } from "../../../constants/types.constants";
import { PriorityStatus } from "../../molecules";

type DropdownItemType = { value: string; label: string };

interface IProps {
  items: DropdownItemType[];
  onClick?: (value: DropdownItemType) => void;
  selectedItem: priorityType;
}

const Dropdown: React.FC<IProps> = ({
  items,
  onClick = () => {},
  selectedItem,
}) => {
  return (
    <div className="absolute bg-white rounded-md shadow-sm border w-52 top-[3.75rem] z-50">
      {items.map((priority, index) => (
        <div
          key={`priority ${index}`}
          className={`${
            index !== 0 ? "border-t" : ""
          } px-[18px] py-2 cursor-pointer ${
            priority.value === selectedItem ? "bg-lightBlue" : "bg-white"
          }`}
          onClick={() => {
            onClick(priority);
          }}
          data-cy="modal-add-priority-item"
        >
          <PriorityStatus label={priority.label} priority={priority.value} />
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
