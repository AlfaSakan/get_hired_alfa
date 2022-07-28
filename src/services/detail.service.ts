import axios from "axios";
import { priorityType, statusType } from "../constants/types.constants";

export const BASE_URL = "https://todo.api.devcode.gethired.id";
export const EMAIL = "testaja@mail.com";
export const DETAIL_URL = "/todo-items";

export interface RequestCreateTodoItem {
  activity_group_id: number | string;
  priority: priorityType;
  title: string;
}

export interface RequestUpdateTodoItem extends RequestCreateTodoItem {
  is_active: statusType;
}

export const getListTodoItem = (id: string | number) =>
  axios.get(`${BASE_URL}${DETAIL_URL}?activity_group_id=${id}`);

export const postTodoItem = (body: RequestCreateTodoItem) =>
  axios.post(`${BASE_URL}${DETAIL_URL}`, body);

export const deleteTodoItem = (id: number | string) =>
  axios.delete(`${BASE_URL}${DETAIL_URL}/${id}`);

export const updateTodoItem = (
  body: Partial<RequestUpdateTodoItem>,
  id: number | string
) => axios.patch(`${BASE_URL}${DETAIL_URL}/${id}`, body);

export const getTodoItem = (id: number | string) =>
  axios.get(`${BASE_URL}${DETAIL_URL}/${id}`);
