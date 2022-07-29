import React from "react";
import { MainLayout } from "../../components/layouts";
import EmptyListIcon from "../../assets/svg/emptyListIcon.svg";
import { BackButton, Button } from "../../components/atoms";
import { CardDetail, EditText, ModalDelete } from "../../components/molecules";
import useDetailViewModel from "./Detail.viewModel";
import { DropdownSort, ModalAddItem } from "../../components/organisms";
import SortIcon from "../../assets/svg/sortIcon.svg";
import { SORT_TYPE } from "../../constants/sort.constant";
import ModalSuccess from "../../components/molecules/ModalSuccess/ModalSuccess.molecule";

const DetailView = () => {
  const {
    activityTitle,
    activityTitleHandler,
    updateActivityApi,
    deleteTodoItemApi,
    backHandler,
    createTodoItemApi,
    closeModal,
    isOpenModal,
    openModal,
    idActivity,
    isLoading,
    closeModalDelete,
    isModalDelete,
    openModalDelete,
    selectedItem,
    updateTodoItemApi,
    editingItem,
    chooseSorting,
    dropdownToggle,
    isOpenDropdown,
    sortValue,
    todoList,
    isSuccessModal,
    closeSuccessModal,
  } = useDetailViewModel();

  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BackButton onClick={backHandler} />
            <EditText
              value={activityTitle}
              onChange={activityTitleHandler}
              onEdited={updateActivityApi}
            />
          </div>
          <div className="flex items-center">
            <div
              className="relative"
              onClick={dropdownToggle}
              data-cy="todo-sort-button"
            >
              <div className="border rounded-full p-3 mr-[18px] cursor-pointer">
                <img src={SortIcon} alt="sorting list" />
              </div>
              {isOpenDropdown && (
                <DropdownSort
                  items={SORT_TYPE}
                  onClick={(val) => chooseSorting(val.value)}
                  selectedItem={sortValue}
                />
              )}
            </div>
            <Button
              text="Tambah"
              dataCy="todo-add-button"
              onClick={() => openModal()}
              isLoading={isLoading}
            />
          </div>
        </div>
        {todoList.length === 0 ? (
          <div
            data-cy="todo-empty-state"
            className="flex justify-center mt-[59px]"
          >
            <img src={EmptyListIcon} alt="empty list icon" />
          </div>
        ) : (
          <div className="mt-[59px] space-y-[10px]">
            {todoList.map((todo, index) => (
              <CardDetail
                data-cy={`todo-item-${index}`}
                todo={todo}
                key={`todo ${index}`}
                onDeleteItem={openModalDelete(todo)}
                isActivityHandler={() => {
                  if (todo.is_active) {
                    updateTodoItemApi({ is_active: 0 }, todo.id);
                    return;
                  }

                  updateTodoItemApi({ is_active: 1 }, todo.id);
                }}
                onEditingItem={(item) => openModal(item)}
              />
            ))}
          </div>
        )}
      </div>
      <ModalAddItem
        isOpen={isOpenModal}
        closeModal={closeModal}
        onSubmit={(title, priority) => {
          if (editingItem) {
            updateTodoItemApi({ title, priority }, editingItem.id);
            return;
          }

          createTodoItemApi({
            title,
            priority,
            activity_group_id: idActivity as string,
          });
        }}
        todo={editingItem}
      />
      <ModalDelete
        closeModal={closeModalDelete}
        isOpen={isModalDelete}
        confirmDelete={deleteTodoItemApi}
        item={selectedItem?.title || ""}
        dataCyModal="modal-delete"
        dataCyDelete="modal-delete-confirm-button"
        dataCyCancel=""
      />
      <ModalSuccess isOpen={isSuccessModal} closeModal={closeSuccessModal} />
    </MainLayout>
  );
};

export default DetailView;
