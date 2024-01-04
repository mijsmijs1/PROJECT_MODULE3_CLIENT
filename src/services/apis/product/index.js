import axios from "axios";

export default {
    create: async (data) => {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/products`, data)
    },
    findMany: async () => {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/products`)
    },
    updateDes: async (id, data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/products/des/${id}`, data)
    },
    update: async (id, data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/products/${id}`, data)
    },
    delete: async (id) => {
        return await axios.delete(`${import.meta.env.VITE_SERVER_HOST}/products/${id}`)
    }
    ,
    deletePic: async (id) => {
        return await axios.delete(`${import.meta.env.VITE_SERVER_HOST}/products/delete-pictures/${id}`)
    }

}