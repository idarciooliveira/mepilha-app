import { apiClient } from "./client";

export type LoginResponse = {
    access_token: string
}

const login = async (email: string, password: string) =>
    await apiClient.post<LoginResponse>('/auth/authenticate', {
        email, password
    })


const register = async (data: any) => {
    return await apiClient.post<any>('/auth/register', data)
}
export default {
    login,
    register
}