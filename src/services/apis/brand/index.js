import axios from "axios";

export default {
    findMany: async () => {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/brands`)
    },
    update: async (id, data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/brands/${id}`, data)
    },
    create: async (data) => {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/brands`, data)
    }
}