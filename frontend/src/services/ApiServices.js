import httpService from "./HttpServices";

export default function ApiServices() {
  const { get, post, put } = httpService();

  const getTasks = async () => {
    try {
      const response = await get(`/tasks`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  const getTaskById = async (id) => {
    try {
      const response = await get(`/tasks/${id}`);
      return response.data;
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
      return response.data.data;
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

  const getUsers = async () => {
    try {
      const response = await get(`/users`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    updateStatusTask,
    getBoards,
    getBoardsById,
    getUsers,
  };
}
