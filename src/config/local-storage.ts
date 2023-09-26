import AsyncStorage from "@react-native-async-storage/async-storage";

const save = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

const get = async (key: string): Promise<any> => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
        console.log(error)
    }
}

const remove = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}

export default {
    save,
    get,
    remove
}