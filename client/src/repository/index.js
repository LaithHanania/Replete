import axios from "axios";

//TODO: Break up into multiple files

export const getCriteria = async () => {
  const resp = await axios.get("/api/criteria");
  return resp.data;
};

export const postCriteria = async (values) => {
  const resp = await axios.post("/api/criteria", values);
  return resp;
};

export const deleteCriteria = async (label) => {
  const resp = await axios.delete("/api/criteria", { data: { label } });
  return resp;
};

export const updateCriteria = async (values, id) => {
  const resp = await axios.put("/api/criteria", { data: { values, id } });
  return resp;
};

export const getEvents = async ({ page, limit }) => {
  const resp = await axios.get(`/api/events?page=${page}&limit=${limit}`);
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

export const getCustomEvents = async () => {
  const resp = await axios.get("/api/customEvents");
  return resp.data;
};

export const postCustomEvent = async (values) => {
  const resp = await axios.post("/api/customEvent", values);

  return resp;
};

export const getUser = async () => {
  const res = await axios.get("/api/current_user");
  return res.data;
};
