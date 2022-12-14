import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActivityModel } from "../../models/Activity/Activity.model";
import {
  getListActivity,
  postActivity,
  deleteActivity,
} from "../../services/todoList.service";
import DetailRoute from "../Detail/Detail.route";

const getDataActivity = async (
  setState: React.Dispatch<React.SetStateAction<ActivityModel[]>>
) => {
  try {
    const res = await getListActivity();

    setState(res.data.data);
  } catch (error) {
    console.log("ERROR GET ACTIVITY", error);
  }
};

const useModalState = () => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(-1);

  const closeModal = () => setIsModalDelete(false);

  const openModal = (id: number) => () => {
    setSelectedActivity(id);
    setIsModalDelete(true);
  };

  return {
    isModalDelete,
    closeModal,
    openModal,
    selectedActivity,
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

const useHomeViewModel = () => {
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const modalState = useModalState();
  const successModalState = useSuccessModal();

  const onAddActivityHandler = async () => {
    try {
      setIsLoading(true);
      await postActivity("New Activity");
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRemoveActivityHandler = async () => {
    try {
      setIsLoading(true);
      await deleteActivity(modalState.selectedActivity);
      successModalState.openSuccessModal();
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onNavigateDetail = (id: number) => () => {
    navigate(DetailRoute.path.replace(":idActivity", id.toString()));
  };

  useEffect(() => {
    if (!isLoading) getDataActivity(setActivities);
  }, [isLoading]);

  return {
    activities,
    onAddActivityHandler,
    onRemoveActivityHandler,
    isLoading,
    onNavigateDetail,
    ...modalState,
    ...successModalState,
  };
};

export default useHomeViewModel;
