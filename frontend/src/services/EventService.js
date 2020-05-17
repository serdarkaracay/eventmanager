import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.post("/event");
  },
  getEvent(id) {
    return apiClient.post("/event/" + id);
  },
  postEvent(event) {
    return apiClient.post("/event", event);
  },
};
