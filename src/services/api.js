import axios from 'axios';

const API = axios.create({
    baseURL: 'https://reqres.in/api',
});

// Auth API
export const login = (credentials) => API.post('/login', credentials);

// Users API
export const getUsers = (page) => API.get(`/users?page=${page}`);
export const getUserDetail = (id) => API.get(`/users/${id}`);
export const createUser = (userData) => API.post('/users', userData);
export const updateUser = (id, userData) => API.put(`/users/${id}`, userData);
export const deleteUser = (id) => API.delete(`/users/${id}`);
