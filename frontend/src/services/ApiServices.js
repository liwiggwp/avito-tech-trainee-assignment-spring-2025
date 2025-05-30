import httpService from "./HttpServices";
import { useState, useEffect } from "react";

export default function ApiServices() {
  const { get, post, put } = httpService();
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);
  const [boards, setBoards] = useState([]);

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

  const getBoards = async () => {
    try {
      const response = await get(`/boards`);
      setBoards(response.data.data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getBoardsById = async (id) => {
    try {
      const response = await get(`/boards/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
    getBoards();
  }, []);

  return {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    updateStatusTask,
    getBoards,
    getBoardsById,
    tasks,
    task,
    boards,
  };
}
