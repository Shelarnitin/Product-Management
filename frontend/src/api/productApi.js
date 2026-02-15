import axios from "axios"

const API = "https://product-management-3-0z6j.onrender.com/api/products";

export const getProducts = () => axios.get(API)
export const createProduct = (data) => axios.post(API, data)
export const updateProduct = (id, data) => axios.put(`${API}/${id}`, data)
export const deleteProduct = (id) => axios.delete(`${API}/${id}`);