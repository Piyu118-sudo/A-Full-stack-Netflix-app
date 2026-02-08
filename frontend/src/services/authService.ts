import axios from 'axios';
import api from './api';
const API_URL = 'http://localhost:3000';

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    });
    localStorage.setItem('token', res.data.access_token);
    return res.data;
};
export const register = async (data: { email: string; password: string }) => {
    const res = await api.post(`auth/register`, data);
    return res.data;
};