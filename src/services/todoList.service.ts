import axios from "axios";

export const BASE_URL = "https://todo.api.devcode.gethired.id";
export const EMAIL = "testaja@mail.com";
export const LIST = "/activity-groups";

export const getListActivity = () =>
  axios.get(`${BASE_URL}${LIST}?email=${EMAIL}`);

export const postActivity = (title: string) =>
  axios.post(`${BASE_URL}${LIST}`, { email: EMAIL, title });

export const deleteActivity = (id: number | string) =>
  axios.delete(`${BASE_URL}${LIST}/${id}`);

export const getActivity = (id: number | string) =>
  axios.get(`${BASE_URL}${LIST}/${id}`);

export const updateActivity = (id: number | string, title: string) =>
  axios.patch(`${BASE_URL}${LIST}/${id}`, { title });
