import httpService from "./HttpServices";
import { useState, useEffect } from "react";

export default function ApiServices() {
  const { get, post, put } = httpService();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  const getTasks = async () => {
    try {
      const response = await get(`/tasks`);
      setTasks(response.data.data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getTaskById = async (id) => {
    try {
      const response = await get(`/tasks/${id}`);
      setTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (data) => {
    try {
      const response = await post("/tasks/create", data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateTask = async (id, data) => {
    try {
      const response = await put(`/tasks/update/${id}`, data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateStatusTask = async (id, data) => {
    try {
      const response = await put(`/tasks/updateStatus/${id}`, data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    updateStatusTask,
    tasks,
    task,
  };
}
