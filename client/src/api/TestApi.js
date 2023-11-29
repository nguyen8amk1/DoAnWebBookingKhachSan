import axios from "axios";

export const gethello = async () => {
  const response = await axios.get("http://127.0.0.1:8080/hello");
  return response.data;
};

export const posthello = async (message) => {
  await axios.post("http://127.0.0.1:8080/post-crud", {
    message: message,
  });
};
