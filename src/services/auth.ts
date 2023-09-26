import { apiClient } from "./client";

export type LoginResponse = {
    access_token: string
}

const login = async (email: string, password: string) =>
    await apiClient.post<LoginResponse>('/auth/authenticate', {
        email, password
    })

export default {
    login,
}