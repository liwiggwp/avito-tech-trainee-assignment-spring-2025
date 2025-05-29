import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const httpService = () => {
  return {
    get: async (url) => {
      try {
        const response = await http.get(url);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    post: async (url, data) => {
      try {
        const response = await http.post(url, data);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    put: async (url, data) => {
      try {
        const response = await http.put(url, data);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  };
};

export default httpService;
