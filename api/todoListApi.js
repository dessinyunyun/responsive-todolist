import { apiBaseUrlTodoList } from "./apiConfig";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const getTodoList = (idActivity) => {
  return axios.get(`${apiBaseUrlTodoList}?activity_group_id=${idActivity}`);
};

const addTodoList = (dataFromFE) => {
  const data = JSON.stringify({
    activity_group_id: dataFromFE.activity_group_id,
    title: dataFromFE.title,
    priority: dataFromFE.priority,
  });

  return axios.post(`${apiBaseUrlTodoList}`, data, {
    headers,
  });
};

const editTodoList = (dataFromFE) => {
  console.log(dataFromFE);

  const data = JSON.stringify({
    title: dataFromFE.title,
    priority: dataFromFE.priority,
  });
  console.log(data);

  return axios.patch(`${apiBaseUrlTodoList}/${dataFromFE.todoId}`, data, {
    headers,
  });
};

const chekListTodo = (dataFromFE) => {
  const data = JSON.stringify({
    is_active: dataFromFE.is_active,
  });

  console.log(data);
  return axios.patch(`${apiBaseUrlTodoList}/${dataFromFE.todoId}`, data, {
    headers,
  });
};

const deleteTodoList = (todoId) => {
  console.log(todoId);
  return axios.delete(`${apiBaseUrlTodoList}/${todoId}`);
};

export { getTodoList, addTodoList, deleteTodoList, chekListTodo, editTodoList };
