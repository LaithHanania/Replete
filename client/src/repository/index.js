import axios from "axios";

export const getCriteria = async () => {
  const resp = await axios.get("/api/criteria");
  return resp.data;
};

export const postCriteria = async (values) => {
  const resp = await axios.post("/api/criteria", values);
  return resp;
};

export const getEvents = async () => {
  const resp = await axios.get("/api/events");
  return resp.data;
};

export const getEvent = async (id) => {
  const resp = await axios.get(`/api/event/${id}`);
  return resp.data;
};

export const postEvent = async (values) => {
  const resp = await axios.post("/api/event", values);
  return resp;
};