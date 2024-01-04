import axios from "axios";

export default {
    register: async function (newUser) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/users`, newUser);
    },
    login: async function (data) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/users/login`, data);
    },
    loginWithGoogle: async function (data) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/users/login/login-with-google`, data);
    },
    decodeToken: async function (token) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/users/token-decode/${token}`);
    },
    findMany: async function () {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/users`);
    },
    create: async function (data) {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/users/create`, data);
    },
    update: async function (userId, data) {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/users/update/${userId}`, data);
    }
}