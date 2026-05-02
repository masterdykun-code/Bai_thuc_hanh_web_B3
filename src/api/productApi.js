import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://localhost:7224/api";

const productClient = axios.create({
  baseURL: `${API_BASE_URL}/products`,
});

export const getProducts = async () => {
  const response = await productClient.get("");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await productClient.get(`/${id}`);
  return response.data;
};

export const createProduct = async (product) => {
  const response = await productClient.post("", product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await productClient.put(`/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await productClient.delete(`/${id}`);
  return response.data;
};
