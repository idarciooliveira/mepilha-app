import authStorage from "../config/storage";
import jwtDecode from "jwt-decode";
import { atom, useAtom } from 'jotai'

export type UserProps = {
    id: string
    name: string
}

export const userAtom = atom<UserProps | null>(null)

export function useAuth() {

    const [user, setUser] = useAtom(userAtom);

    const login = (authToken: string) => {
        const user = jwtDecode<UserProps>(authToken)
        setUser(user)
        authStorage.storeToken(authToken)
    }

    const logout = () => {
        setUser(null)
        authStorage.removeToken()
    }

    return {
        user,
        setUser,
        logout,
        login,
        isAuthenticated: !!user
    }
}