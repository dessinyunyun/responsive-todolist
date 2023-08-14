import { apiBaseUrlActivity } from "./apiConfig";
import axios from "axios";

const getActivity = (email) => {
  return axios.get(`${apiBaseUrlActivity}?email=${email}`);
};

const getActivityDetail = (activityId) => {
  return axios.get(`${apiBaseUrlActivity}/${activityId}`);
};

const editTitleActivity = (data) => {
  const dataTitle = {
    title: data.title,
  };
  console.log(data);
  return axios.patch(`${apiBaseUrlActivity}/${data.activityId}`, dataTitle);
};

const addActivity = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios.post(`${apiBaseUrlActivity}`, data, {
    headers,
  });
};

const deleteActivity = (activityId) => {
  console.log(activityId);
  return axios.delete(`${apiBaseUrlActivity}/${activityId}`);
};

export { getActivity, getActivityDetail, addActivity, deleteActivity, editTitleActivity };
