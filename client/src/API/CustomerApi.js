import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5085" })


export const getListCustomer = () => API.get(`/api/Customers`);
export const getCustomerById = (id) => API.get(`/api/Customers/${id}`)