import * as SecureStorage from 'expo-secure-store'
import jwtDecode from 'jwt-decode'
// import { UserProps } from '../hooks/useAuth'

const key = 'authToken'

const getUser = async () => {
    const token = await getToken()
    if (!token) return null
    return jwtDecode<any>(token)
}

const storeToken = async (authToken: string) => {
    try {
        await SecureStorage.setItemAsync(key, authToken)
    } catch (error) {
        console.log(error)
    }
}

const getToken = async () => {
    try {
        return await SecureStorage.getItemAsync(key)
    } catch (error) {
        console.log(error)
    }
}

const removeToken = async () => {
    try {
        return await SecureStorage.deleteItemAsync(key)
    } catch (error) {
        console.log(error)
    }
}

export default {
    removeToken,
    getUser,
    getToken,
    storeToken
}