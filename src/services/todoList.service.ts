import axios from 'axios';

const BASE_URL = "https://todo.api.devcode.gethired.id"
const EMAIL = 'testaja@mail.com';
const LIST = '/activity-groups';

export const getListActivity = () => axios.get(`${BASE_URL}${LIST}?email=${EMAIL}`);

export const postActivity = (title: string) => axios.post(`${BASE_URL}${LIST}`, {email: EMAIL, title});

export const deleteActivity = (id: number) => axios.delete(`${BASE_URL}${LIST}/${id}`);