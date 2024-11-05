import axios from "axios"
const domain = 'https://courrier-three.vercel.app/'

const getApi = async (url: string, token?: string, params?: any) => await axios.get(`${domain}${url}`, {
    headers: { Authorization: 'Bearer ' + token },
    params: params
})
const postApi = async (url: string, token?: string, data?: any) => await axios.post(`${domain}${url}`, data, {
    headers: { Authorization: 'Bearer ' + token }
})
const putApi = async (url: string, token?: string, data?: any) => await axios.put(`${domain}${url}`, data, {
    headers: { Authorization: 'Bearer ' + token }
})

const deleteApi = async (url: string, token?: string, params?: any) => await axios.delete(`${domain}${url}`, {
    headers: { Authorization: 'Bearer ' + token },
    params: params
})
export { getApi, postApi, putApi, deleteApi }