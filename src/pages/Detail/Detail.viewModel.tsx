/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SortType } from "../../constants/sort.constant";
import { ActivityModel } from "../../models/Activity/Activity.model";
import { ResponseModel } from "../../models/Response/Response.model";
import { TodoModel } from "../../models/Todo/Todo.model";
import {
  deleteTodoItem,
  getListTodoItem,
  postTodoItem,
  RequestCreateTodoItem,
  RequestUpdateTodoItem,
  updateTodoItem,
} from "../../services/detail.service";
import { getActivity, updateActivity } from "../../services/todoList.service";

const useModalState = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState<TodoModel>();

  const openModal = (item?: TodoModel) => {
    if (item) {
      setEditingItem(item);
    }

    setIsOpenModal(true);
  };

  const closeModal = () => setIsOpenModal(false);

  return {
    openModal,
    closeModal,
    isOpenModal,
    editingItem,
  };
};

const useModalDeleteState = () => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TodoModel>();

  const closeModalDelete = () => setIsModalDelete(false);

  const openModalDelete = (item: TodoModel) => () => {
    setSelectedItem(item);
    setIsModalDelete(true);
  };

  return {
    isModalDelete,
    closeModalDelete,
    openModalDelete,
    selectedItem,
  };
};

const useSuccessModal = () => {
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const openSuccessModal = () => setIsSuccessModal(true);

  const closeSuccessModal = () => setIsSuccessModal(false);

  return {
    isSuccessModal,
    openSuccessModal,
    closeSuccessModal,
  };
};

const useDetailViewModel = () => {
  const [activityTitle, setActivityTitle] = useState("");
  const [todoList, setTodoList] = useState<TodoModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState<SortType>("Terbaru");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const modalState = useModalState();
  const modalDeleteState = useModalDeleteState();
  const modalSuccessState = useSuccessModal();

  const navigate = useNavigate();

  const { idActivity } = useParams();

  const activityTitleHandler = (value: string) => setActivityTitle(value);

  const backHandler = () => navigate(-1);

  // #region Todo Item
  const createTodoItemApi = async (body: RequestCreateTodoItem) => {
    try {
      setIsLoading(true);
      await postTodoItem(body);
    } catch (error) {
      console.log("ERROR createTodoItemApi", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTodoItemApi = async () => {
    try {
      if (!idActivity) return;

      const response = await getListTodoItem(idActivity);
      const data = response.data as ResponseModel<TodoModel[]>;

      setTodoList(data.data);
    } catch (error) {
      console.log("ERROR getDetailTodo", error);
    }
  };

  const deleteTodoItemApi = async () => {
    try {
      const res = await deleteTodoItem(modalDeleteState.selectedItem?.id || 0);

      if (res.status === 200) {
        setTodoList((prev) => {
          const filtered = prev?.filter(
            (data) => data.id !== modalDeleteState.selectedItem?.id
          );

          if (!filtered) return prev;

          return filtered;
        });

        modalSuccessState.openSuccessModal();
      }
    } catch (error) {
      console.log("ERROR deleteTodoItemApi", error);
    }
  };

  const updateTodoItemApi = async (
    body: Partial<RequestUpdateTodoItem>,
    id: string | number
  ) => {
    try {
      await updateTodoItem(body, id);

      if (body.is_active !== undefined) {
        setTodoList((prev) => {
          const current = prev.map((value) => {
            if (id === value.id) {
              const newValue = { ...value };

              if (value.is_active) {
                newValue.is_active = 0;
                return newValue;
              }

              newValue.is_active = 1;
              return newValue;
            }

            return value;
          });

          return current;
        });
      }
    } catch (error) {
      console.log("ERROR updateTodoItemApi", error);
    }
  };
  // #endregion

  // #region ACTIVITY
  const getActivityApi = async () => {
    try {
      if (!idActivity) return;

      const response = await getActivity(idActivity);
      const data = response.data as ActivityModel;

      setActivityTitle(data.title);
    } catch (error) {
      console.log("ERROR getActivityApi", error);
    }
  };

  const updateActivityApi = async () => {
    try {
      if (!idActivity) return;

      await updateActivity(idActivity, activityTitle);
    } catch (error) {
      console.log("ERROR updateActivityApi", error);
    }
  };
  // #endregion

  const sortingTodoItem = () => {
    const data = [...todoList];

    switch (sortValue) {
      case "Terbaru":
        data.sort((a, b) => b.id - a.id);

        break;
      case "Terlama":
        data.sort((a, b) => a.id - b.id);
        break;
      case "A to Z":
        data.sort((a, b) => (a.title > b.title ? 0 : -1));
        break;
      case "Z to A":
        data.sort((a, b) => (b.title > a.title ? 0 : -1));
        break;
      case "Belum Selesai":
        data.sort((a, b) => b.is_active - a.is_active);
        break;
      default:
        break;
    }

    setTodoList([...data]);
  };

  const dropdownToggle = () => setIsOpenDropdown(!isOpenDropdown);

  const chooseSorting = (val: SortType) => {
    setSortValue(val);
    dropdownToggle();
  };

  useEffect(() => {
    getActivityApi();
    getTodoItemApi();
  }, [idActivity]);

  useEffect(() => {
    getTodoItemApi();
  }, [idActivity, isLoading]);

  useEffect(() => {
    sortingTodoItem();
  }, [sortValue, isLoading]);

  return {
    activityTitle,
    activityTitleHandler,
    idActivity,
    updateActivityApi,
    deleteTodoItemApi,
    backHandler,
    createTodoItemApi,
    isLoading,
    updateTodoItemApi,
    todoList,
    isOpenDropdown,
    dropdownToggle,
    chooseSorting,
    sortValue,
    ...modalState,
    ...modalDeleteState,
    ...modalSuccessState,
  };
};

export default useDetailViewModel;
