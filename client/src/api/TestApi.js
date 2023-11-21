import axios from "axios";

export const getDitme = async () => {
  const response = await axios.get("http://127.0.0.1:8080/ditme");
  return response.data;
};

export const postDitme = async (message) => {
  await axios.post("http://127.0.0.1:8080/post-crud", {
    message: message,
  });
};
