import axios from "axios";

export default {
    findMany: async () => {
        return await axios.get(`${import.meta.env.VITE_SERVER_HOST}/receipts`)
    },
    addToCart: async (item) => {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/receipts/add-to-cart`, item)
    },
    delete: async (itemId) => {
        return await axios.delete(`${import.meta.env.VITE_SERVER_HOST}/receipts/${itemId}`)
    },
    update: async (data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/receipts`, data)
    }
    ,
    updateReceipt: async (ReceiptId, data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/receipts/${ReceiptId}`, data)
    },
    pay: async (receiptId, data) => {
        return await axios.patch(`${import.meta.env.VITE_SERVER_HOST}/receipts/pay/${receiptId}`, data)
    },
    zaloReceipt: async (data) => {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/receipts/pay/zalo/`, data)
    },
    zaloCheck: async (zaloPayReceiptId) => {
        return await axios.post(`${import.meta.env.VITE_SERVER_HOST}/receipts/pay/zalo-check/${zaloPayReceiptId}`)
    }
}