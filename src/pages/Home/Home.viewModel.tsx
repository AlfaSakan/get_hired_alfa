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

const useHomeViewModel = () => {
  const [activities, setActivities] = useState<ActivityModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const onRemoveActivityHandler = (id: number) => async () => {
    try {
      setIsLoading(true);
      await deleteActivity(id);
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
  };
};

export default useHomeViewModel;
