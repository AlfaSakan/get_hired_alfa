import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import { PriorityStatus } from "../../molecules";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Dropdown from "../Dropdown/Dropdown.organism";
import { Button } from "../../atoms";
import { PRIORITY_LIST } from "../../../constants/priority.constant";
import { priorityType } from "../../../constants/types.constants";
import { TodoModel } from "../../../models/Todo/Todo.model";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    backgroundColor: "white",
    height: "65%",
    width: "60%",
    borderRadius: "12px",
    transform: "translate(25%, 33%)",
    padding: 0,
    overflow: "visible",
  },
};

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit?: (title: string, priority: string) => void;
  todo?: TodoModel;
}

const ModalAddItem: React.FC<IProps> = ({
  closeModal,
  isOpen,
  onSubmit = () => {},
  todo,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [title, setTitle] = useState("");
  const [defaultPriority, setDefaultPriority] = useState({
    label: "Very High",
    value: "very-high",
  });

  const resetState = () => {
    setTitle("");
    setDefaultPriority({
      label: "Very High",
      value: "very-high",
    });
  };

  const selectPriorityHandler = (selectedItem: {
    label: string;
    value: priorityType;
  }) => {
    setDefaultPriority(selectedItem);
    closeDropdown();
  };

  const closeDropdown = () => setIsOpenDropdown(false);

  const dropdownToggle = () => setIsOpenDropdown(!isOpenDropdown);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      const filteredPriority = PRIORITY_LIST.find(
        (value) => value.value === todo.priority
      );

      if (filteredPriority) {
        setDefaultPriority(filteredPriority);
      }
    }
  }, [todo]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div data-cy="modal-add" className="h-full">
        <div className="flex items-center justify-between pl-8 pr-10 pt-6 pb-5">
          <p className="font-semibold text-lg" data-cy="modal-add-title">
            Tambah List Item
          </p>
          <div
            className="cursor-pointer"
            data-cy="modal-add-close-button"
            onClick={closeModal}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="border-y pl-8 pr-10 pt-9 pb-14 flex flex-col">
          <div className="flex flex-col mb-[26px]">
            <label
              htmlFor="item"
              className="font-semibold text-xs mb-2 font-poppins"
              data-cy="modal-add-name-title"
            >
              Nama List Item
            </label>
            <div data-cy="modal-add-name-input">
              <input
                type="text"
                id="item"
                className="border h-[3.25rem] pl-[18px] rounded-md w-full"
                placeholder="Tambahkan nama list item"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p
              className="font-semibold text-xs mb-2"
              data-cy="modal-add-priority-title"
            >
              Priority
            </p>
            <div className="relative">
              <div
                className="border rounded-md h-[3.25rem] px-[18px] flex items-center justify-between w-52 cursor-pointer"
                onClick={dropdownToggle}
                data-cy="modal-add-priority-dropdown"
              >
                <PriorityStatus
                  label={defaultPriority.label}
                  priority={defaultPriority.value}
                />
                <KeyboardArrowDownIcon />
              </div>
              {isOpenDropdown && (
                <Dropdown
                  items={PRIORITY_LIST}
                  onClick={selectPriorityHandler}
                  selectedItem={defaultPriority.value}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end pt-4 pr-10">
          <Button
            onClick={() => {
              if (title !== "") {
                onSubmit(title, defaultPriority.value);
              }
            }}
            onFocus={() => {
              closeModal();
              resetState();
            }}
            text="Simpan"
            dataCy="modal-add-save-button"
            disabled={title === ""}
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalAddItem;
