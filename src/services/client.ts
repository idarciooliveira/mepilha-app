import { create } from "apisauce";
import authStorage from "../config/storage";

const apiClient = create({
    // baseURL: 'http://172.30.113.21:3333/api/v1'
    baseURL: 'https://mepilha-api.onrender.com/api/v1'
})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if (!authToken) return;
    // @ts-ignore
    request.headers['Authorization'] = `Bearer ${authToken}`
})

async function fetcher(url: string): Promise<any> {
    const response = await apiClient.get(url)
    return response.data
}

export {
    apiClient,
    fetcher
}