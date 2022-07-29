import React from "react";
import { priorityType } from "../../../constants/types.constants";
import CheckIcon from "@material-ui/icons/Check";
import { SortType } from "../../../constants/sort.constant";

type DropdownItemType = { value: SortType; label: string; img: any };

interface IProps {
  items: DropdownItemType[];
  onClick?: (value: DropdownItemType) => void;
  selectedItem: priorityType;
}

const DropdownSort: React.FC<IProps> = ({
  items,
  onClick = () => {},
  selectedItem,
}) => {
  return (
    <div className="absolute bg-white rounded-md shadow-sm border w-52 top-[3.75rem] z-50">
      {items.map((item, index) => (
        <div
          key={`priority ${index}`}
          className={`${
            index !== 0 ? "border-t" : ""
          } px-[18px] py-2 cursor-pointer`}
          onClick={(e) => {
            onClick(item);
          }}
          data-cy="sort-selection"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-3">
                <img src={item.img} alt={item.value} />
              </div>
              <p>{item.label}</p>
            </div>
            {selectedItem === item.value && <CheckIcon />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownSort;
