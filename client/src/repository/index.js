import axios from "axios";

export const getCriteria = async () => {
  const resp = await axios.get("/api/criteria");
  return resp.data;
};

export const postCriteria = async (values) => {
  const resp = await axios.post("/api/criteria", values);
  return resp;
};
